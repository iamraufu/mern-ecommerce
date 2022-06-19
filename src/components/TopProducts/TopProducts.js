import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import products from '../../data/products.json';
import { addToDB } from '../../utilities/localDB';

const TopProducts = () => {

    const navigate = useNavigate();

    let topProducts = [];
    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * products.length);
        if (!topProducts.includes(products[number])) {
            topProducts.push(products[number]);
        }
        else {
            i--;
        }
    }

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDB(product.id)
        Swal.fire(
            'Successful!',
            `You Have Added ${product.name}!`,
            'success'
        )
          navigate('/cart');
    }

    return (
        <div>
            <h1 style={{ fontSize: '22px', color: '#212529', fontWeight: '700' }} className='mt-3'>Top Products of This Week</h1>

            <div className="row products-container justify-content-center align-items-center">
                {
                    topProducts.map(product => {
                        return (
                            <div className="cart-deck mb-5 col-lg-3 col-md-5 col-sm-8 mx-1" key={product.id}>
                                <div className="cart">
                                    <Link to={`/product/${product.id}`} onClick={() => { window.scrollTo(0, 0); }} className='text-decoration-none text-black'>
                                        <img src={product.image} className="cart-img-top img-fluid mx-auto d-block" alt={product.name} />
                                    </Link>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="cart-body col-sm-6">
                                            <h2 className="cart-title">{product.name}</h2>
                                            <p className="cart-text">Price: {product.price} Taka</p>
                                        </div>

                                        <div className="d-flex col-sm-6">
                                            <div onClick={()=> {
                                                window.scrollTo(0, 0);
                                                navigate(`/product/${product.id}`);
                                                }} className="col-sm-6 my-3">
                                                <button className="btn btn-outline-dark">Details</button>
                                            </div>
                                            <div className="col-sm-6 my-3 mx-3">
                                                <button onClick={() => addToCart(product)} className="btn btn-outline-secondary">Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    )
                }
            </div>
        </div>
    );
};

export default TopProducts;
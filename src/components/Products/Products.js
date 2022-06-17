import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Products.css';
import products from '../../data/products.json';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { addToDB } from '../../utilities/localDB';
import Swal from 'sweetalert2';

const Products = () => {

    const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDB(product.id);
        Swal.fire(
            'Successful!',
            `You Have Added ${product.name}!`,
            'success'
          )
    }

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container">
                <h1 className="text-center mt-5 mb-3 fs-4">Products</h1>
                <div className="row products-container justify-content-center align-items-center">
                    {
                        products.map(product => {
                            return (
                                <div className="cart-deck mb-5 col-lg-3 col-md-5 col-sm-8 mx-1" key={product.id}>

                                    <div className="cart">
                                        <Link to={`/product/${product.id}`} onClick={() => { window.scrollTo(0, 0); }} className='text-decoration-none text-black'>
                                            <img src={product.image} className="cart-img-top img-fluid mx-auto d-block" alt={product.name} />
                                        </Link>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="cart-body col-sm-6">
                                                <h5 className="cart-title">{product.name}</h5>
                                                <p className="cart-text">Price: {product.price} Taka</p>
                                            </div>

                                            <div className="d-flex col-sm-6">
                                                <div onClick= {()=> {
                                                    window.scrollTo(0, 0);
                                                    navigate(`/product/${product.id}`);
                                                }} className="col-sm-6 my-3">
                                                    <button className="btn btn-outline-dark">Details</button>
                                                </div>
                                                <div onClick={() => addToCart(product) } className="col-sm-6 my-3 mx-3">
                                                    <button className="btn btn-outline-secondary">Cart</button>
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
            <Footer />
        </section>
    );
};

export default Products;
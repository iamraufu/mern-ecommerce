import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import products from '../../data/products.json';
import { useParams, useNavigate } from 'react-router-dom';
import { addToDB } from '../../utilities/localDB';
import Swal from 'sweetalert2';
import Review from '../Review/Review';

const Product = () => {
    
    const navigate = useNavigate();

    const { id } = useParams();
    const product = products.find(product => product.id === id);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        shoppingCart(product);
        Swal.fire(
            'Successful!',
            `You Have Added ${product.name}!`,
            'success'
          )
    }

    const shoppingCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDB(id);
    }

    const handleClick = (product) => {
        shoppingCart(product);
        navigate('/shipping')
    }
    
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container">
                <h1 className='mt-5 fs-4 text-center'>Product Details</h1>

                <div className="row mt-5 justify-content-center align-items-center">

                    <div className="col-lg-4">
                        <img src={product.image} style={{ borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d' }} className='img-fluid mx-auto d-block mb-3' width={250} alt={product.image} />
                        <div className="d-flex justify-content-center align-items-center">
                            <button onClick={() => addToCart(product) } className='btn btn-dark mt-2 fw-bold'>Add to Cart</button>
                            <button onClick={()=> handleClick(product)} className='btn btn-success mt-2 ms-2'>Buy Now</button>
                        </div>
                    </div>

                    <div className="col-lg-8 mb-3">
                        <div style={{ borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d' }} className="bg-white p-5 mt-4 mx-auto">
                            <h3 className='fs-5 fw-bold'>{product.name}</h3>
                            <hr />
                            <p style={{textAlign: 'justify'}} className='fs-6'>{product.description}</p>
                            <hr />
                            <small>Price: <span className='fs-5 fw-bold'>{product.price}</span> Taka</small>
                        </div>
                    </div>
                </div>

                <Review />

            </div>
        </section>
    );
};

export default Product;
import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Products.css';
import products from '../../data/products.json';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Products = () => {
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
                                    <Link to={`/product/${product.id}`} onClick={()=>{window.scrollTo(0, 0);}} className='text-decoration-none text-black'>
                                        <div className="cart">
                                            <img src={product.image} className="cart-img-top img-fluid mx-auto d-block" alt={product.name} />
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="cart-body">
                                                    <h5 className="cart-title">{product.name}</h5>
                                                    <p className="cart-text">Price: {product.price} Taka</p>
                                                </div>
                                                <div className="">
                                                    <button className="btn btn-outline-dark my-3">Details</button>
                                                    <button className="btn btn-outline-secondary my-3 ms-2">Buy</button>
                                                </div>
                                            </div>

                                        </div>

                                    </Link>
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
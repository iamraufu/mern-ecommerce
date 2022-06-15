import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products.json';

const TopProducts = () => {

    let topProducts = [];
    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * products.length);
        if(!topProducts.includes(products[number])){
            topProducts.push(products[number]);
        }
        else{
            i--;
        }
    }

    return (
        <div>
            <h1 style={{ fontSize: '22px', color: '#212529', fontWeight: '700' }} className='mt-3'>Top Products of This Week</h1>
            
            <div className="row products-container justify-content-center align-items-center">
                    {
                        topProducts.map(product => {
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
    );
};

export default TopProducts;
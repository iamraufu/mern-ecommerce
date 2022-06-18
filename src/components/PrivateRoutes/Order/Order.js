import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';
import { getStoredCart } from '../../../utilities/localDB';
import products from '../../../data/products.json';

const Order = () => {

    const { user } = useAuth();

    const { displayName, email } = user;

    const shippingDetails = JSON.parse(localStorage.getItem('shipping'));
    const payment_mode = JSON.parse(localStorage.getItem('payment_mode'));

    let savedCart = getStoredCart();
    let cart = [];

    for (let key in savedCart) {
        cart.push({
            ...products.find(pd => pd.id === key),
            quantity: savedCart[key]
        })
    }

    return (
        <section className='bg-brand bg-brand-container py-2'>
            <Navbar />
            <div className="container mt-5">
                <h1 className='fs-4 text-center'>Order Summary</h1>

                <div className="row">

                <div className="col-lg-8 col-md-12 col-sm-12 px-3">
                    <h2 className='fs-4 mt-5'>Shipping Details</h2>
                    <h3 className='fs-6'>Name: {displayName}</h3>
                    <h3 className='fs-6'>Email: {email}</h3>
                    {
                        shippingDetails && <p>Address: {shippingDetails.address} {shippingDetails.city} {shippingDetails.postal_code} {shippingDetails.country}</p>
                    }
                    
                    <hr />
                    <h2 className='fs-4'>Payment Mode</h2>
                    <p>Method: {payment_mode}</p>
                    <hr />
                    
                    <h2 className='fs-5'>Order Items</h2>
                    {
                        cart.map(item =>
                            <div key={item.id} className="px-2">
                                <div className="d-flex justify-content-between align-items-center mt-3 col-sm-12">

                                    <div className="col-sm-1">
                                        <img src={item.image} className='img-fluid' width={60} alt={item.name} />
                                    </div>

                                    <div className="col-sm-4">
                                        <p className='text-center pt-3'>{item.name}</p>
                                    </div>

                                    <div className="d-flex justify-content-end col-sm-7">
                                        <p className='text-center pt-3'>{item.quantity} x {item.price} = {item.quantity * item.price}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <hr />
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="col-lg-4 d-none d-lg-block px-3 mt-5">

                    <div style={{ border: '1px solid lightgrey' }} className="p-2">
                        <h2 className='fs-5 text-center'>Sub Total: {cart.reduce((a, b) => { return a + (b.quantity); }, 0)} Item(s)</h2>
                        <h3 className='fs-5 text-center'>Price: {cart.reduce((a, b) => a + b.price * b.quantity, 0)} Taka</h3>
                    </div>

                    <div style={{ border: '1px solid lightgrey' }} className="py-2">
                        <button id='btn_checkout' className='btn btn-dark mx-auto d-block'>Pay Now</button>
                    </div>
                </div>

                <div style={{ boxShadow: '0 3px 10px 3px #0003' }} className="col-sm-12 d-lg-none fixed-bottom bg-brand py-3">
                <div style={{ border: '1px solid lightgrey' }} className="p-2">
                        <h2 className='fs-5 text-center'>Sub Total: {cart.reduce((a, b) => { return a + (b.quantity); }, 0)} Item(s)</h2>
                        <h3 className='fs-5 text-center'>Price: {cart.reduce((a, b) => a + b.price * b.quantity, 0)} Taka</h3>
                    </div>

                    <div style={{ border: '1px solid lightgrey' }} className="py-2">
                        <button id='btn_checkout' className='btn btn-dark mx-auto d-block'>Pay Now</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Order;
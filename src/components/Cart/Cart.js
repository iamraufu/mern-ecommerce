import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Cart.css';

const Cart = () => {
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <h1 className='text-center mt-5 fs-4'>Cart</h1>
            <Footer />
        </section>
    );
};

export default Cart;
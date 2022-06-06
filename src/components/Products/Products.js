import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Products.css';

const Products = () => {
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <h1 className="text-center mt-5">Products</h1>
            <Footer />
        </section>
    );
};

export default Products;
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Hero from './Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar />
            {/* <h1 className='text-center mt-5'>Home</h1> */}
            <div className="container hero-container my-5 py-5">
                <Hero />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
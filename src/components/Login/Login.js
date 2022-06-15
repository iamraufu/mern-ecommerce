import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Login.css';

const Login = () => {
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <h1 className="text-center mt-5 fs-4">Login</h1>
            <Footer />
        </section>
    );
};

export default Login;
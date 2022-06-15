import React from 'react';
import './Dashboard.css';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <h1 className="text-center mt-5 fs-4">Dashboard</h1>
            <Footer />
        </section>
    );
};

export default Dashboard;
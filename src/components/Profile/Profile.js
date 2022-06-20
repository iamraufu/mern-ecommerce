import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Profile.css';

const Profile = () => {

    const { user, logOut } = useAuth();

    const { displayName, email, photoURL } = user;

    const shippingDetails = JSON.parse(localStorage?.getItem('shipping'));

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container">
                <div className="">
                    <h1 className="text-center mt-5 fs-4">Profile</h1>
                    <h2 className="fs-5">Customer's Information</h2>
                    <h3 className='fs-6'>Name: {displayName}</h3>
                    <h3 className='fs-6'>Email: {email}</h3>
                    {
                        shippingDetails && <p>Address: {shippingDetails.address} {shippingDetails.city} {shippingDetails.postal_code} {shippingDetails.country}</p>
                    }
                    <img src={photoURL} style={{ borderRadius: '50%' }} width={60} alt={displayName} />
                </div>
            
                <div className="mt-3">
                    <button onClick={logOut} className="btn btn-sm btn-danger">Log Out</button>
                </div>

            </div>
            <Footer />
        </section>
    );
};

export default Profile;
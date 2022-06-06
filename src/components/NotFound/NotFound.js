import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <section>
            <Navbar />
            <h1 className="text-center text-danger mt-5">404 <br />NOT FOUND</h1>
        </section>
    );
};

export default NotFound;
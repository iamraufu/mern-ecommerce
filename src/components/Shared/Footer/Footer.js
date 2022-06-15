import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className='pb-3'>
            <h1 className='text-center fs-6'>&copy; <a href="https://www.google.com/search?q=eftykhar+rahman" className="text-decoration-none text-muted" target="_blank" rel="noreferrer">Eftykhar Rahman</a> | {(new Date()).getFullYear()}</h1>
        </section>
    );
};

export default Footer;
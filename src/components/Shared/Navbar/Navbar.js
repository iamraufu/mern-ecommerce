import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import products from '../../../data/products.json';
import { getStoredCart } from '../../../utilities/localDB';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {

    const { user } = useAuth();

    let savedCart = getStoredCart()
    let cart = [];
    for (let key in savedCart) {
        cart.push({ ...products.find(pd => pd.id === key), quantity: savedCart[key] })
    }

    return (
        <nav style={{backgroundColor: '#f3f5f9'}} className="navbar navbar-expand-lg customize-navbar sticky-top">
            <div className="container">

                <NavLink className="navbar-brand" to="/">
                    <img src={logo} width={50} className='img-fluid' alt="logo" />MERN E-Commerce
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">

                    <div className="navbar-nav ms-auto">
                        <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} className="nav-link active" aria-current="page" to="/">Home</NavLink>

                        <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} className="nav-link" to="/products">Products</NavLink>

                        {
                            cart.length > 0 ? <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : "",
                                };
                            }} className="nav-link" to="/cart">Cart <sup className='fw-bold'>({cart.reduce((a, b) => { return a + (b.quantity); }, 0)})</sup></NavLink>
                                :
                                <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "",
                                    };
                                }} className="nav-link" to="/cart">Cart</NavLink>
                        }

                        {
                            !user.email && <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : "",
                                };
                            }} className="nav-link" to="/login">Login</NavLink>
                        }

                        {
                            user.email && <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : "",
                                };
                            }} className="nav-link" to="/profile">Profile</NavLink>
                        }

                        {/* {
                            user.email && <NavLink onClick={() => { window.scrollTo(0, 0); }} style={({ isActive }) => {
                                return {
                                    color: isActive ? "red" : "",
                                };
                            }} className="nav-link" to="/dashboard">Dashboard</NavLink>
                        } */}

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
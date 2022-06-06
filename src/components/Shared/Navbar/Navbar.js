import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg customize-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img src={logo} width={50} className='img-fluid' alt="logo" />MERN E-Commerce</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} className="nav-link" to="/products">Products</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} className="nav-link" to="/cart">Cart</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} className="nav-link" to="/login">Login</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} className="nav-link" to="/profile">Profile</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "",
                            };
                        }} className="nav-link" to="/dashboard">Dashboard</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
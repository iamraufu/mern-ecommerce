import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
// import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';

import Shipping from './components/PrivateRoutes/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import logo from './images/logo.png';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Payment from './components/PrivateRoutes/Payment/Payment';
import Order from './components/PrivateRoutes/Order/Order';

const Login = lazy(() => import('./components/Login/Login'));

function App() {

  const renderLoader = () =>
    <div style={{ position: 'absolute', height: '100px', width: '100px', top: '50%', left: '50%', marginLeft: '-50px', marginTop: '-50px' }}>
      {/* <div className="spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div> */}
      <img src={logo} id='breathing' width={100} height={100} className='img-fluid' alt="logo of Skill Shikhun" />
      {/* <p>MERN E-Commerce Web App is Loading...</p> */}
      <p className='text-center'>Loading...</p>
    </div>

  return (
    <AuthProvider>
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />

          <Route path='/' element={<PrivateOutlet />}>
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
            <Route path="order" element={<Order />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;

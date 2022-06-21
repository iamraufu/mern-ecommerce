import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Payment = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        localStorage.setItem('payment_mode', JSON.stringify(data.payment_mode))
        navigate('/order');
    }

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container mt-5">
                <h1 className='text-center fs-4'>Enter Your Payment Mode</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group mt-2">
                        <label htmlFor="aamar_pay">
                            <input
                                {...register("payment_mode", { required: true })}
                                type="radio"
                                name="payment_mode"
                                value="Aamar Pay"
                                id="aamar_pay"
                                checked
                            />
                            Aamar Pay
                        </label>
                        </div>

                        <div className="form-group mt-2">
                        <label htmlFor="cash_on_delivery">
                            <input
                                {...register("payment_mode", { required: true })}
                                type="radio"
                                name="payment_mode"
                                value="Cash On Delivery"
                                id="cash_on_delivery"
                            />Cash on Delivery
                        </label>
                        </div>

                        <button type="submit" className='btn btn-dark p-2 mt-3'>Continue</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Payment;
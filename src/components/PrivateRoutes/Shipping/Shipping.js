import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        localStorage.setItem('shipping', JSON.stringify(data));
        navigate('/payment');
    }

    const shippingDetails = localStorage.getItem('shipping') ? JSON.parse(localStorage.getItem('shipping')) : {};

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container mt-5">
                <h1 className='fs-4 text-center'>Shipping Details</h1>

                <div className="col-md-6 col-sm-8 mx-auto d-block">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mt-2">
                            <label htmlFor="address" className='p-1'>Address</label>
                            <input type="text" className="form-control p-2" value={shippingDetails.address} {...register("address", { required: true })} />
                            {errors.address && <span className='text-danger'>This Field is required</span>}
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="city" className='p-1'>City</label>
                            <input type="text" className="form-control p-2" value={shippingDetails.city} {...register("city", { required: true })} />
                            {errors.city && <span className='text-danger'>This Field is required</span>}
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="address" className='p-1'>Postal Code</label>
                            <input type="text" className="form-control p-2" value={shippingDetails.postal_code} {...register("postal_code", { required: true })} />
                            {errors.postal_code && <span className='text-danger'>This Field is required</span>}
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="country" className='p-1'>Country</label>
                            <input type="text" className="form-control p-2" value={shippingDetails.country} {...register("country", { required: true })} />
                            {errors.country && <span className='text-danger'>This Field is required</span>}
                        </div>

                        <p><small className="form-text text-muted">We'll never share your information with anyone else.</small></p>
                        <input className='btn btn-dark p-2 mt-2' type="submit" value='Continue' />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Shipping;
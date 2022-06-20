import React from 'react';
import './Shipping.css';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        localStorage.setItem('shipping', JSON.stringify(data));
        navigate('/payment');
    }

    localStorage.getItem('shipping') && navigate('/payment');

    return (
        <section>
            <Navbar />
            <div className="container">
                <h1 className='fs-4 mt-5 text-center'>Shipping</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 col-sm-8 mx-auto d-block">

                        <div className="form-group mt-2">
                            <label htmlFor='address'>Address</label>
                            <input type='text' className="form-control" {...register("address", { required: true })} />
                            {errors.address && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor='city'>City</label>
                            <input type='text' className="form-control" {...register("city", { required: true })} />
                            {errors.city && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor='postal_code'>Postal Code</label>
                            <input type='text' className="form-control"{...register("postal_code", { required: true })} />
                            {errors.postal_code && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor='country'>Country</label>
                            <input type='text' className="form-control"{...register("country", { required: true })} />
                            {errors.country && <span className='text-danger'>This field is required</span>}

                        </div>
                        <p><small className="form-text text-muted">We'll never share your information with anyone else.</small></p>

                        <input type="submit" className="btn btn-dark" value="Continue" />
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Shipping;
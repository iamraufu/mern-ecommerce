import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const ResetPassword = () => {

    const {resetPassword} = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        resetPassword(data.email);
    }

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container">
                <h1 className="text-center mt-5 fs-4">Reset Password</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 col-sm-8 mx-auto d-block">
                        
                        <div className="form-group mt-2">
                            <label htmlFor='email' className='p-1'>Email</label>
                            <input id='email' type='text' className="form-control p-2" {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                        </div>
                        <input type="submit" className="btn btn-dark p-2 mx-auto d-block mt-3" value="Send a Password Reset Email" />
                    </div>
                    
                </form>
            </div>
        </section>
    );
};

export default ResetPassword;
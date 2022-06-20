import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Register = () => {

    const { auth, createUserWithEmailAndPassword, user, 
        // sendEmailVerification, 
        updateProfile
    } = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/profile";

    user.email && navigate(from, { replace: true })

    // const [name, setName] = useState('');
    // const [image, setImage] = useState('');
    const [registerError, setRegisterError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // setName(data.name);
        // setImage(data.image);
        // console.log(data)
        registerNewUser(data.name, data.image, data.email, data.password)
    }

    const registerNewUser = (name, image, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setRegisterError('');
                // verifyEmail();
                setUserName(name, image);
            })
            .catch((error) => {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Email already in use',
                        text: 'You have already registered with this email address.',
                    })
                }
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
            });
    }

    // const verifyEmail = () => {
    //     console.log(auth.currentUser)
    //     sendEmailVerification(auth.currentUser)
    //         .then(result => {
    //             console.log(result);
    //         })
    // }

    const setUserName = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        }).then(() => {
        }).catch((error) => {
            console.log(error.message)
        });
    }

    // const handleImageUpload = () => {
    //     let base64String = "";

    //     imageUploaded();
    //     function imageUploaded() {
    //         var file = document.querySelector(
    //             'input[type=file]')['files'][0];

    //         var reader = new FileReader();

    //         reader.onload = function () {
    //             base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    //             console.log(base64String);
    //         }
    //         reader.readAsDataURL(file);
    //     }

    //     displayString();

    //     function displayString() {
    //         console.log("Base64String about to be printed");
    //         alert(base64String);
    //     }
    // }

    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container">
                <h1 className='fs-4 mt-5 text-center'>Sign Up</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 col-sm-8 mx-auto d-block">

                        <div className="form-group mt-2">
                            <label htmlFor='name' className='form-label p-1'>Name</label>
                            <input type='text' className="form-control p-2" {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor='image' className='form-label p-1'>Copy Your Profile Picture Link from the Internet</label>
                            <input type='text' className="form-control p-2" {...register("image", { required: true })} />
                            {errors.image && <span className='text-danger'>This field is required</span>}
                        </div>

                        {/* <div className="mt-2">
                            <label htmlFor="formFile" className="form-label p-1">Upload Your profile Picture</label>
                            <input onChangeCapture={handleImageUpload} className="form-control" type="file" id="formFile" {...register("image", { required: true })} />
                            {errors.image && <span className='text-danger'>This field is required</span>}
                        </div> */}

                        <div className="form-group mt-2">
                            <label htmlFor='email' className='p-1'>Email</label>
                            <input id='email' type='text' className="form-control p-2" {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor='password' className='p-1'>Password</label>
                            <input id='password' type='password' className="form-control p-2"{...register("password", { required: true })} />
                            {errors.password && <span className='text-danger'>This field is required</span>}
                        </div>

                        <p><small className="form-text text-muted">We'll never share your information with anyone else.</small></p>

                        <p className='text-danger fw-bold mt-3 text-center'>{registerError}</p>

                        <input type="submit" className="btn btn-dark p-2" value="Register" />

                        <div className="mt-3">
                            <Link to='/login' className='text-black text-decoration-none'>Already have an Account? <span className='text-primary text-decoration-underline'>Sign In</span></Link>
                        </div>
                    </div>

                </form>

            </div>
        </section>
    );
};

export default Register;
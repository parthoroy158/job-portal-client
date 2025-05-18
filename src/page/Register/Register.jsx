import React, { useContext } from 'react';
import Lottie from "lottie-react";
import register from '../../assets/register.json'
import AuthContext from '../../shared/AuthContex/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const { createUser, SignInwithGoogle } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    const handleSigninWithGoole = () => {
        SignInwithGoogle()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error, 'error')
            })
    }

    return (
        <div className="hero bg-base-200 mt-5">
            <div className="hero-content flex-col gap-15 lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h1 className="text-4xl font-bold text-center">Register Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Register</button>
                        </div>
                    </form>
                    <div className='divider'>
                        <p>Or</p>
                    </div>
                    <div className='p-4'>
                        <button className='btn w-full' onClick={handleSigninWithGoole}>Sign In With Google</button>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <Lottie className='w-90' animationData={register}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Register;
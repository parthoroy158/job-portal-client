import React, { useContext } from 'react';
import Lottie from "lottie-react";
import login from '../../assets/log in.json'
import AuthContext from '../../shared/AuthContex/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    // console.log('from log in page', location)
    const from = location.state || '/';
    const { signIn, SignInwithGoogle } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                const user = { email: email }
                axios.post('https://server-job-portal-eight.vercel.app/jwt', user,{withCredentials:true})
                    .then(res => {
                        console.log(res.data)
                    })
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            }
            )
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
                <div className="text-center lg:text-left">

                    <Lottie className='w-68' animationData={login}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h1 className="text-4xl font-bold text-center">Log in!</h1>
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
                            <button className="btn btn-primary w-full">Log In</button>
                            <Link to='/register' className='mt-5'>Create a new <span className='font-bold'>Account</span>?</Link>
                        </div>
                    </form>
                    <div className='p-4'>
                        <button className='btn w-full' onClick={handleSigninWithGoole}>Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
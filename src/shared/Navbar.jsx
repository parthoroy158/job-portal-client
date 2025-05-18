import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContex/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user? <li><NavLink to='/myapplications'>My Appications</NavLink></li> :''
        }
        <li><NavLink to='/addjob'>Add a Job</NavLink></li>
        {
            user? <li><NavLink to='/myPostedJobs'>My Posted Job</NavLink></li> : ''
        }
    </>


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('succeess Fully sign out')
                navigate('/')

            })
            .catch(error => {
                console.log('faild to sign out', error)
            })
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Job Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">


                {
                    user ?
                        <>
                            <button className='btn' onClick={handleSignOut}>Log Out</button>
                        </>
                        :
                        <>
                            <Link to='/register' className="btn">Register</Link>
                            <Link to='/logIn' className="btn">Log In</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;
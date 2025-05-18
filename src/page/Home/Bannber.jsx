import React from 'react';
import { motion } from "motion/react"
import office1 from '../../assets/office1.jpg'
import office2 from '../../assets/office2.jpg'
import { Link } from 'react-router-dom';

const Bannber = () => {
    return (
        <div className="hero bg-base-200 mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 '>
                    <motion.img
                        src={office1}
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 5, repeat: Infinity, }}
                        className="max-w-sm w-48 h-30 rounded-lg shadow-2xl" />
                    <motion.img
                        src={office2}
                        animate={{ x: [50, 100, 50] }}
                        transition={{ duration: 5, repeat: Infinity, }}
                        className="max-w-sm w-48 h-30 object-cover rounded-lg shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 5, delay: 1, repeat: Infinity }}
                        className="text-5xl font-bold">Latest Job here!</motion.h1>
                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day.
                    </p>
                    <Link to='/register'>
                        <button className="btn btn-primary">Register Now!</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Bannber;
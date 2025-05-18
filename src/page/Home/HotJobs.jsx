import React, { useEffect, useState } from 'react';
import HotJobsCrad from './HotJobsCrad';

const HotJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('https://server-job-portal-eight.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                console.log(data)
            })
    }, [])
    return (

        <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                jobs.map(job => <HotJobsCrad job={job}></HotJobsCrad>)
            }
        </div>
    );
};

export default HotJobs;
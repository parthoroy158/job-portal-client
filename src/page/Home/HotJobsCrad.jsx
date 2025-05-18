import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';


const HotJobsCrad = ({ job }) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilitie, status, hr_email, company_logo } = job
    return (
        <div className="card card-compact bg-base-100  shadow-xl mt-5 ">
            <div className='flex p-3 gap-5'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div className='mt-3'>
                    <h4>{company}</h4>
                    <h4 className='flex items-center gap-1'><CiLocationOn />{location}</h4>
                </div>
            </div>
            <div className="card-body">
                <div className='flex gap-5'>
                    <h2 className="card-title">{title}!</h2>
                    <div className="badge badge-secondary">NEW</div>
                </div>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map(skill => <p className='border rounded-md px-1 hover:bg-gray-500 text-black'>{skill}</p>)
                    }
                </div>

                <div className="card-actions justify-between items-center">
                    <div>
                        <p>Salary: {salaryRange.max} - {salaryRange.min} {salaryRange.currency}</p>
                    </div>
                    <Link to={`/jobdetails/${_id}`}>
                        <button className="btn btn-primary w-full hover:bg-blue-500">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCrad;
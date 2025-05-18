import { object } from 'motion/react-client';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)
        const { max, min, currency, ...newJob } = initialData; //NOTED...
        console.log(newJob)
        newJob.salaryRange = { max, min, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('https://server-job-portal-eight.vercel.app/jobs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Job has been added!",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/myPostedJobs')
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl text-center mt-5 font-bold'>Post a new jobs: </h2>
            <form className="card-body w-full shadow-2xl bg-base-100" onSubmit={handleAddJob}>
                {/* Job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Titile</span>
                    </label>
                    <input type="text" placeholder="Job-Title" name='title' className=" w-full input input-bordered" required />
                </div>
                {/* Job location */}
                <div className="form-control ">
                    <label className="label ">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" placeholder="Job Location" name='location' className="w-full input input-bordered" required />
                </div>
                {/* Job Type */}
                <div className="form-control flex flex-col">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs border-black" name='jobType' >
                        <option disabled selected>Pick a job type</option>
                        <option>Full Time</option>
                        <option>Intern</option>
                        <option>Part-Time</option>
                    </select>
                </div>
                {/* Job Field */}
                <div className="form-control flex flex-col">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs border-black" name='category'>
                        <option disabled selected>Pick a job field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Teaching</option>
                    </select>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {/* Max Salary */}
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Max Salary</span>
                        </label>
                        <input type="text" placeholder="Max Salary" name='max' className="w-full input input-bordered" required />
                    </div>
                    {/* Min Salary */}
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Min Salary</span>
                        </label>
                        <input type="text" placeholder="Max Salary" name='min' className="w-full input input-bordered" required />
                    </div>
                    {/* Currency */}
                    <div className="form-control flex flex-col">
                        <label className="label">
                            <span className="label-text">Currency</span>
                        </label>
                        <select className="select select-ghost w-full max-w-xs border-black" name='currency'>
                            <option disabled>Select a Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                {/* Job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job description </span>
                    </label>
                    <textarea
                        placeholder="Job description"
                        className="textarea textarea-bordered textarea-lg w-full " name='description' ></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" placeholder="Company Name" name='company' className=" w-full input input-bordered" required />
                </div>
                {/* Requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements </span>
                    </label>
                    <textarea
                        placeholder="Job Requirements"
                        className="textarea textarea-bordered textarea-lg w-full " name='requirements'></textarea>
                </div>
                {/* Job Responsibility */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibility </span>
                    </label>
                    <textarea
                        placeholder="Job Responsibility"
                        className="textarea textarea-bordered textarea-lg w-full " name='responsibilities'></textarea>
                </div>
                {/* Hr Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="Hr Name" className=" w-full input input-bordered" required />
                </div>
                {/* Hr Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="text" name='hr_email' defaultValue={user?.email} placeholder="HR Email" className=" w-full input input-bordered" required />
                </div>
                {/* Application deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application dateline</span>
                    </label>
                    <input type="date" name='applicationDeadline' placeholder="Application Deadline" className=" w-full input input-bordered" required />
                </div>
                {/* Company Logo URL*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text" >Company Logo URL</span>
                    </label>
                    <input type="text" name="company_logo" placeholder="Company Logo URL" className=" w-full input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary w-full hover:bg-blue-500">Post Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
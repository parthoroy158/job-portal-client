import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    // console.log(id, user)


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const linkedIN = form.linkedin.value
        const gitHub = form.github.value
        const resume = form.resume.value
        // console.log(linkedIN, gitHub, resume)
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIN,
            gitHub,
            resume
        }
        fetch('https://server-job-portal-eight.vercel.app/job-applications', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(async res => {
                if (!res.ok) {
                    const errorData = await res.text();
                    console.error('Failed to submit application:', errorData);
                    throw new Error('Failed to submit application');
                }
                return res.json();
            })
            .then(data => {
                console.log('Response from server:', data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Application Submitted!",
                        icon: "success",
                        draggable: true
                    });
                } else {
                    Swal.fire({
                        title: "Submission Failed",
                        text: "No insertedId returned.",
                        icon: "error"
                    });
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    title: "Error",
                    text: err.message,
                    icon: "error"
                });
            });
    }
    return (
        <form className="card-body w-full mt-5" onSubmit={handleSubmit}>
            <h2 className='text-center font-bold text-2xl'>Good Luck and Apply for job</h2>
            <div className="form-control" >
                <label className="label">
                    <span className="label-text">Linkedin URL</span>
                </label>
                <input type="url" placeholder="linkedIn URL" name='linkedin' className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">GitHub URL</span>
                </label>
                <input type="url" placeholder="GitHub URL" name='github' className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="url" placeholder="resume" name='resume' className="input input-bordered w-full" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary hover:bg-blue-600 w-full">Apply Now</button>
            </div>
        </form>
    );
};

export default JobApply;
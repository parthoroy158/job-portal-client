

import { div } from 'motion/react-client';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();

    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements = [],
        responsibilitie = [],
        status,
        hr_email,
        company_logo,
    } = job;

    return (
        <div>
            <div className="max-w mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Employment Information</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">Industry</span>
                            <span className="text-gray-800">{company} </span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">Salary(BDT)</span>
                            <span className="text-gray-800">{salaryRange.max}- {salaryRange.min}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">Job type</span>
                            <span className="text-gray-800">{jobType}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">Updated</span>
                            <span className="text-gray-800">10/07/2022</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">Job level</span>
                            <span className="text-gray-800">Experienced (Non-Manager)</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">Experience</span>
                            <span className="text-gray-800">1 - 2 years</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">Deadline</span>
                            <span className="text-gray-800">{applicationDeadline}</span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium text-gray-600">Location</span>
                            <span className="text-gray-800">{location} </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='font-bold mt-10 text-2xl text-gray-500'>Welcome to {company} Team</p>
                <p>{description}</p>
            </div>
            <div>
                <p className='font-bold mt-10 text-2xl text-gray-500'>Essential Knowledge, Skills, and Experience</p>
                {
                    requirements.map(skill => <li className=''>{skill}</li>)
                }
            </div>
            <Link to={`/jobapply/${_id}`}>
                <button className='btn text-center mt-10 bg-blue-600 hover:bg-blue-500 text-white'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;

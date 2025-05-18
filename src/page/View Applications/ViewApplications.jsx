import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const applications = useLoaderData()
    return (
        <div>
            <h2>This is the view applications page:{applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application,index) => <tr>
                                <th>{index+1}</th>
                                <td>{application.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([])
    const { user } = useAuth()
    console.log(user.email)

    useEffect(() => {
        fetch(`https://server-job-portal-eight.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    return (
        <div>
            <h2>My Posted Jobs:{jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Deadline</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td><Link to={`/viewApplications/${job._id}`}><button className="btn">View Application</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;
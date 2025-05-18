import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../shared/MainLayout";
import Home from "../page/Home/Home";
import Register from "../page/Register/Register";
import LogIn from "../page/Log in/LogIn";
import JobDetails from "../page/jobdetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../page/Job Apply/JobApply";
import MyApplications from "../page/my applications/MyApplications";
import AddJob from "../page/AddJOb/AddJob";
import MyPostedJobs from "../page/My Posted Jobs/MyPostedJobs";
import ViewApplications from "../page/View Applications/ViewApplications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>404 Error</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/myapplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: '/addjob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/myPostedJobs',
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/jobdetails/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-job-portal-eight.vercel.app/jobdetails/${params.id}`)
            },
            {
                path: 'jobapply/:id',
                element: <JobApply></JobApply>
            },
            {
                path: '/viewApplications/:job_id',
                element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
                loader: ({params}) => fetch(`https://server-job-portal-eight.vercel.app/job-applications/jobs/${params.job_id}`)
            }
        ]
    },
]);

export default router
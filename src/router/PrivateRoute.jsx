import React, { useContext } from 'react';
import AuthContext from '../shared/AuthContex/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    if (user) {
        return children
    }
    return <Navigate to='/logIn' state={location?.pathname}></Navigate>
};

export default PrivateRoute;
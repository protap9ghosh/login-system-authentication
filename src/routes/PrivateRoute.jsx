import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    return (
        <div>
            <Navigate to="/login" replace={true}></Navigate>
        </div>
    );
};

export default PrivateRoute;
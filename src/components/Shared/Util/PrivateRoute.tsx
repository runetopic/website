import React from 'react';
import {
    Navigate, useLocation,
} from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';

const ProtectedRoute = ({ children }: any) => {
    const location = useLocation();
    const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/login" state={ { from: location } } />;
};
export default ProtectedRoute;

import {
    BrowserRouter as Router,
    Routes,
    Route, useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header';
import './app.module.scss';
import Copyright from '../Shared/UI/Copyright';
import { useAppDispatch } from '../../hooks/hooks';
import Dashboard from '../Dashboard';
import Login from '../Login';
import ProtectedRoute from '../Shared/Util/PrivateRoute';
import Register from '../Register';
import CreateTopic from '../Topic/CreateTopic';
import ViewTopic from '../Topic/ViewTopic';
import RecentTopics from '../Topic/RecentTopics';
import { logoutAction } from '../Login/loginSlice';
import Tools from '../Tools';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(logoutAction());
        window.localStorage.clear();
        navigate('/');
    }, []);
    return null;
};

const Application = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/logout" element={ <Logout /> } />
                <Route path="/register" element={ <Register /> } />
                <Route
                    path="/"
                    element={ <Dashboard /> }
                />
                <Route
                    path="/tools"
                    element={ (
                        <ProtectedRoute>
                            <Tools />
                        </ProtectedRoute>
                    ) }
                />
                <Route
                    path="/topics/new"
                    element={ (
                        <ProtectedRoute>
                            <CreateTopic />
                        </ProtectedRoute>
                    ) }
                />
                <Route
                    path="/topics/recent"
                    element={ <RecentTopics /> }
                />
                <Route
                    path="/topics/view/:uuid"
                    element={ (
                        <ViewTopic />
                    ) }
                />
            </Routes>
            <Copyright />
        </Router>
    );
};

export default Application;

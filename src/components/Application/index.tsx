import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Header from '../Header';
import './app.module.scss';
import Copyright from '../Shared/UI/Copyright';
import { useAppSelector } from '../../hooks/hooks';
import Dashboard from '../Dashboard';
import Login from '../Login';
import ProtectedRoute from '../Shared/Util/PrivateRoute';
import Register from '../Register';
import CreateTopic from '../Topic/CreateTopic';
import ViewTopic from '../Topic/ViewTopic';

export default () => {
    const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

    return (
        <Router>
            { isAuthenticated && <Header /> }
            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route
                    path="/"
                    element={ (
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    ) }
                />
                <Route
                    path="/topic/new"
                    element={ (
                        <ProtectedRoute>
                            <CreateTopic />
                        </ProtectedRoute>
                    ) }
                />
                <Route
                    path="/topic/view/:uuid"
                    element={ (
                        <ProtectedRoute>
                            <ViewTopic />
                        </ProtectedRoute>
                    ) }
                />
            </Routes>
            <Copyright />
        </Router>
    );
};

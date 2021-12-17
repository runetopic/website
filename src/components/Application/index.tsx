import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import {
    Route, Switch, useHistory,
} from 'react-router';
import { useEffect } from 'react';
import theme from '../../theme';
import Header from '../Header';
import Dashboard from '../Dashboard';
import CreateTopic from '../Topic/CreateTopic';

import Login from '../Login';

import './app.module.scss';
import Register from '../Register';
import Copyright from '../Shared/UI/Copyright';
import { useAppSelector } from '../../hooks/hooks';

export default () => {
    const history = useHistory();

    const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        } else if (window.location.pathname.indexOf('register') === -1) {
            history.push('/login');
        }
    }, [isAuthenticated]);

    const authenticatedRoutes = (
        <Switch>
            <Route exact path="/" component={ Dashboard } />
            <Route exact path="/topic/new" component={ CreateTopic } />
        </Switch>
    );

    const unAuthenticatedRoutes = (
        <Switch>
            <Route exact path="/login" render={ () => <Login /> } />
            <Route exact path="/register" component={ Register } />
        </Switch>
    );

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={ theme }>
                { isAuthenticated && <Header /> }
                { isAuthenticated && authenticatedRoutes }
                { unAuthenticatedRoutes }
                <Copyright />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

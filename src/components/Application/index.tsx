import {StyledEngineProvider, ThemeProvider} from '@mui/material';
import {Redirect, Route, Switch} from 'react-router';
import theme from '../../theme';
import Header from '../Header';
import Dashboard from '../Dashboard';
import CreateTopic from '../Topic/CreateTopic';

import './app.module.scss'
import Login from "../Login";
import {useState} from "react";

export default function Application() {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const authenticatedRoutes = (
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/topic/new' component={CreateTopic}/>
        </Switch>
    );

    const unAuthenticatedRoutes = (
        <Switch>
            <Route exact path='/login' component={Login}/>
        </Switch>
    );

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                {isAuthenticated && <Header/>}
                {isAuthenticated && authenticatedRoutes}
                {unAuthenticatedRoutes}
                {!isAuthenticated && <Route path="/" render={() => <Redirect to="/login"/>}/>}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

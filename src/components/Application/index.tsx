import {  StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Redirect, Route, Switch } from 'react-router';
import theme from '../../theme';
import Header from '../Header';
import HomePage from '../Dashboard';
import CreateTopic from '../Topic/CreateTopic';

import './app.module.scss'

export default function Application() {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={ theme }>
				<Header />
				<Switch>
					<Route exact path='/' component={ HomePage } />
					<Route exact path='/topic/new' component={ CreateTopic } />
					<Route exact path="/" render={() => <Redirect to="/" /> } />
				</Switch>
			</ThemeProvider>
		</StyledEngineProvider>
    );
}

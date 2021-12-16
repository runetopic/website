import {  StyledEngineProvider, ThemeProvider } from '@mui/material';
import { Redirect, Route, Switch } from 'react-router';
import theme from '../../theme';
import Header from '../header';
import HomePage from '../home';
import CreateTopic from '../topic/CreateTopic';

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

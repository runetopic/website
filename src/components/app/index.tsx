import { Redirect, Route, Switch } from 'react-router';
import Header from '../header';
import HomePage from '../home';
import CreateTopic from '../topic/CreateTopic';

import './app.module.scss'

function Application() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={ HomePage } />
				<Route exact path='/topic/new' component={ CreateTopic } />
				<Route exact path="/" render={() => <Redirect to="/" /> } />
			</Switch>
		</>
	);
}

export default Application;

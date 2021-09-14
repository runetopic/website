import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from '../header';
import HomePage from '../home';
import ProjectsPage from '../project';

import styles from './app.module.scss';

function Application() {
	useEffect(() => {
		document.body.style.backgroundColor = 'white';
		document.body.style.margin = "auto"
	}, []);

	return (
		<div className={ styles.container }>
			<Header />
			<div className={ styles.content }>
			<Switch>
				<Route path='/home' component={ HomePage } />
				<Route path='/topics' render={ () => <div>Coming soon!</div> } />
				<Route path='/projects' component={ ProjectsPage } />
				<Route exact path="/" render={() => <Redirect to="/home" /> } />
			</Switch>
			</div>
		</div>
	);
}

export default Application;

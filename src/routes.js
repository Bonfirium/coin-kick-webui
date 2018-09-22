import React from 'react';
import { Route, Switch } from 'react-router';

import {
	MAIN_PATH,
	DASHBOARD_PATH,
} from './constants/RouterConstants';

import App from './containers/App';

import MainPage from './components/pages/MainPage';
import Dashboard from './components/pages/Dashbord';

export default class Routes extends React.Component {

	render() {
		return (
			<Switch>
				<App>
					<Route exact path={MAIN_PATH} component={MainPage} />
					<Route exact path={DASHBOARD_PATH} component={Dashboard} />
				</App>
			</Switch>
		);
	}

}

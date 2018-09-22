import React from 'react';
import { Route, Switch } from 'react-router';

import {
	DASHBOARD_PATH,
} from './constants/RouterConstants';

import App from './containers/App';

import Dashboard from './containers/Dashboard';

export default class Routes extends React.Component {

	render() {
		return (
			<Switch>
				<App>
					<Route exact path={DASHBOARD_PATH} component={Dashboard} />
				</App>
			</Switch>
		);
	}

}

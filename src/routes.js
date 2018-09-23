import React from 'react';
import { Route, Switch } from 'react-router';

import {
	MAIN_PATH,
	DASHBOARD_PATH,
	WALLET_PATH,
	BLOG_PATH,
} from './constants/RouterConstants';

import App from './containers/App';
import AuthRoute from './containers/AuthRoute';

import MainPage from './components/pages/MainPage';
import Dashboard from './components/pages/Dashbord';
import Coins from './components/pages/Coins';
import Blog from './components/pages/BlogProjects';

export default class Routes extends React.Component {

	render() {
		return (
			<App>
				<Switch>
					<Route exact path={MAIN_PATH} component={MainPage} />
					<AuthRoute>
						<Switch>
							<Route exact path={DASHBOARD_PATH} component={Dashboard} />
							<Route exact path={WALLET_PATH} component={Coins} />
							<Route exact path={BLOG_PATH} component={Blog} />
						</Switch>
					</AuthRoute>
				</Switch>
			</App>
		);
	}

}

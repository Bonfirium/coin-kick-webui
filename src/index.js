import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';

import Routes from './routes';
import './assets/stylesheets/main.scss';

import GlobalActions from './actions/GlobalActions';

import history from './history';
import store from './store';

store.dispatch(GlobalActions.init()).then(() => {
	// Now you can dispatch navigation actions from anywhere!
	// store.dispatch(push('/foo'))
	ReactDOM.render(
		<Provider store={store}>
			{/* ConnectedRouter will use the store from Provider automatically */}
			<ConnectedRouter history={history}>
				<div>
					<Routes />
				</div>
			</ConnectedRouter>
		</Provider>,
		document.getElementById('root'),
	);
});

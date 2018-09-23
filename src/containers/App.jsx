import React from 'react';
import PropTypes from 'prop-types';

import Toast from '../components/Toast';

import Header from '../components/header';

class App extends React.Component {

	render() {
		const { children } = this.props;
		return (
			<div className="global-wrapper">
				<Header />
				{children}
				<Toast />
			</div>
		);
	}

}

App.propTypes = {
	children: PropTypes.any.isRequired,
};

export default App;

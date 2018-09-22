import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header.component';
import MainPage from '../components/pages/main-page.component';

class App extends React.Component {

	render() {
		const { children } = this.props;
		return (
			<div className="global-wrapper">
				<Header />
				<MainPage />
				{children}
			</div>
		);
	}

}

App.propTypes = {
	children: PropTypes.any.isRequired,
};

export default App;

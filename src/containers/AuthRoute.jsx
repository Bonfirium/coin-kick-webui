import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MAIN_PATH } from '../constants/RouterConstants';

class AuthRoute extends React.Component {

	render() {
		const { user, children } = this.props;

		if (!user) {
			return <Redirect to={MAIN_PATH} />;
		}

		return children;
	}

}

AuthRoute.propTypes = {
	user: PropTypes.object,
	children: PropTypes.any.isRequired,
};

AuthRoute.defaultProps = {
	user: null,
};

export default connect((state) => ({
	user: state.auth.get('user'),
}))(AuthRoute);

import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MAIN_PATH } from '../constants/RouterConstants';

class AuthRoute extends React.Component {

	render() {
		const { userId, children } = this.props;

		if (!userId || userId.length === 0) {
			return <Redirect to={MAIN_PATH} />;
		}

		return children;
	}

}

AuthRoute.propTypes = {
	userId: PropTypes.string,
	children: PropTypes.any.isRequired,
};

AuthRoute.defaultProps = {
	userId: null,
};

export default connect((state) => ({
	userId: state.auth.get('id'),
}))(AuthRoute);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ponyImage from '../../assets/images/user.png';
import UserActions from '../../actions/UserActions';

class Dashboard extends React.Component {

	componentDidMount() {
		const { getUser } = this.props;
		getUser();
	}

	formSubmit(e) {
		e.preventDefault();

		const { setUser } = this.props;

		const formInput = {
			displayName: this.nameInput ? this.nameInput.value : null,
		};

		setUser(formInput);
	}

	render() {
		const { email, displayName } = this.props;
		return (
			<div id="dashboard" className="container">
				<div className="dashboard_content dashboard_name">
					<div className="dashboard_left-container">
						<img alt="user" src={ponyImage} />
					</div>
					<div className="dashboard_right-container">
						<form className="d-none" onSubmit={(e) => this.formSubmit(e)}>
							<div className="input_container">
								<input
									type="text"
									placeholder="Name"
									ref={(node) => {
										this.nameInput = node;
									}}
								/>
								<img className="name_img" src={ponyImage} alt="" />
							</div>
							<button type="submit" className="d-none">ok</button>
						</form>
						<p className="user_name d-none">{displayName || 'no name'}</p>
						<p>{email || 'no email'}</p>
						<ul className="projects">
							<li>projects</li>
						</ul>
					</div>
				</div>
				<div className="dashboard_content">
					<div className="dashboard_content-container">
						<p className="currency">Баланс</p>
						<p className="value">$ 10.00</p>
					</div>
					<div className="dashboard_content-container">
						<p className="currency">BTC</p>
						<p className="value">$ 10.00</p>
					</div>
					<div className="dashboard_content-container">
						<p className="currency">LTC</p>
						<p className="value">$ 10.00</p>
					</div>
					<div className="dashboard_content-container">
						<p className="currency">ETH</p>
						<p className="value">$ 10.00</p>
					</div>
					<a className="btn" href="">
						<div className="circle" />
						<div className="circle" />
						<div className="circle" />
					</a>
				</div>
			</div>
		);
	}

}

Dashboard.propTypes = {
	email: PropTypes.string,
	displayName: PropTypes.string,
	setUser: PropTypes.func.isRequired,
	getUser: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
	email: '',
	displayName: '',
};

export default connect(
	(state) => ({
		email: state.auth.get('email'),
		displayName: state.auth.get('displayName'),
	}),
	(dispatch) => ({
		setUser: (data) => dispatch(UserActions.setUser(data)),
		getUser: () => dispatch(UserActions.getUser()),
	}),
)(Dashboard);

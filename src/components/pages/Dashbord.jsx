import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ponyImage from '../../assets/images/user.png';
import UserActions from '../../actions/UserActions';
import { WALLET_PATH } from '../../constants/RouterConstants';

class Dashboard extends React.Component {

	getSumBalance(currencies) {
		const arr = currencies.filter((_, index) => index < 3);
		const sumBalance = arr.reduce((sum, currency) => parseFloat(currency.balance) + sum, 0);
		return (
			<div className="dashboard_content-container">
				<p className="currency">Баланс</p>
				<p className="value">{`$ ${sumBalance}`}</p>
			</div>
		);
	}

	getDashboardContent(currencies) {
		return currencies.filter((_, index) => index < 3).map((currency) => (
			<div className="dashboard_content-container" key={currency.name}>
				<p className="currency">{currency.shortName}</p>
				<p className="value">{`$ ${currency.balance}`}</p>
			</div>
		));
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
		const { user } = this.props;
		const { email, displayName, currencies } = user;
		return (
			<div id="dashboard" className="container">
				<div className="dashboard_content dashboard_name">
					<div className="dashboard_left-container">
						<img alt="user" src={ponyImage} />
					</div>
					<div className="dashboard_right-container">
						<form className={displayName ? 'd-none' : ''} onSubmit={(e) => this.formSubmit(e)}>
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
							<button type="submit" className={displayName ? 'd-none' : ''}>ok</button>
						</form>
						<p className={displayName ? 'user_name' : 'user_name d-none'}>{displayName || 'no name'}</p>
						<p>{email || 'no email'}</p>
						<ul className="projects">
							<li>projects</li>
						</ul>
					</div>
				</div>
				<div className="dashboard_content">
					{this.getSumBalance(currencies)}
					{this.getDashboardContent(currencies)}
					<a className="btn" href={WALLET_PATH}>
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
	user: PropTypes.object,
	setUser: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
	user: null,
};

export default connect(
	(state) => ({
		user: state.auth.get('user'),
	}),
	(dispatch) => ({
		setUser: (data) => dispatch(UserActions.setUser(data)),
	}),
)(Dashboard);

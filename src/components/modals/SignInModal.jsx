import React from 'react';
import PropTypes from 'prop-types';

class SignInModal extends React.Component {

	formSubmit(e) {
		e.preventDefault();

		const { onSubmit } = this.props;

		const formInput = {
			email: this.emailInput ? this.emailInput.value : null,
			password: this.passwordInput ? this.passwordInput.value : null,
		};

		onSubmit(formInput);
	}

	render() {
		const { isOpen } = this.props;
		return (
			<div id="sign-up" className={isOpen ? 'active' : 'unactive'}>
				<h3>Sign In</h3>
				<form onSubmit={(e) => this.formSubmit(e)}>
					<input
						className="reg_form"
						type="text"
						placeholder="E-mail"
						ref={(node) => {
							this.emailInput = node;
						}}
					/>
					<input
						className="reg_form"
						type="password"
						placeholder="Password"
						ref={(node) => {
							this.passwordInput = node;
						}}
					/>
					<button type="submit" className="btn">Sign In</button>
				</form>
			</div>
		);
	}

}

SignInModal.propTypes = {
	isOpen: PropTypes.bool,
	onSubmit: PropTypes.func,
};

SignInModal.defaultProps = {
	isOpen: false,
	onSubmit: () => {},
};

export default SignInModal;

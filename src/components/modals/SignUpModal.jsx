import React from 'react';
import PropTypes from 'prop-types';

class SignUpModal extends React.Component {

	formSubmit(e) {
		e.preventDefault();

		const { onSubmit } = this.props;

		const formInput = {
			email: this.emailInput ? this.emailInput.value : null,
			password: this.passwordInput ? this.passwordInput.value : null,
			passwordRepeat: this.passwordRepeatInput ? this.passwordRepeatInput.value : null,
		};

		if (formInput.password === formInput.passwordRepeat) {
			onSubmit(formInput);
		}
	}

	render() {
		const { isOpen } = this.props;
		return (
			<div id="sign-up" className={isOpen ? 'active' : 'unactive'}>
				<h3>Sign Up</h3>
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
					<input
						className="reg_form"
						type="password"
						placeholder="Password repeat"
						ref={(node) => {
							this.passwordRepeatInput = node;
						}}
					/>
					<button type="submit" className="btn">Sign Up</button>
				</form>
			</div>
		);
	}

}

SignUpModal.propTypes = {
	isOpen: PropTypes.bool,
	onSubmit: PropTypes.func,
};

SignUpModal.defaultProps = {
	isOpen: false,
	onSubmit: () => {},
};

export default SignUpModal;

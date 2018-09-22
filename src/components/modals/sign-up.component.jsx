import React from 'react';

export default class SignUpComponent extends React.Component {

	render() {
		return (
			<div id="sign-up" className="unactive">
				<h3>Log In</h3>
				<form action="">
					<input className="reg_form" type="text" placeholder="E-mail" />
					<input className="reg_form" type="password" placeholder="Password" />
					<input className="reg_form" type="password" placeholder="Password repeat" />
					<button type="button" className="btn">Log In</button>
				</form>
			</div>
		);
	}

}

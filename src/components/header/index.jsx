import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignInModal from '../modals/SignInModal';
import SignUpModal from '../modals/SignUpModal';
import AuthActions from '../../actions/AuthActions';

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signUpOpen: false,
			signInOpen: false,
		};
	}

	onSignIn(data) {
		const { onSignIn } = this.props;
		onSignIn(data);
		this.setState({
			signUpOpen: false,
			signInOpen: false,
		});
	}

	onSignUp(data) {
		const { onSignUp } = this.props;
		onSignUp(data);
		this.setState({
			signUpOpen: false,
			signInOpen: false,
		});
	}

	onSignOut() {
		const { onSignOut } = this.props;
		onSignOut();
	}


	openSignInModal(e) {
		e.preventDefault();
		const { signInOpen } = this.state;
		this.setState({
			signUpOpen: false,
			signInOpen: !signInOpen,
		});
	}

	openSighUpModal(e) {
		e.preventDefault();
		const { signUpOpen } = this.state;
		this.setState({
			signUpOpen: !signUpOpen,
			signInOpen: false,
		});
	}

	render() {
		const { signInOpen, signUpOpen } = this.state;
		const { user } = this.props;

		return (
			<React.Fragment>
				<div id="head" className="logged">
					<div className="main">
						<div id="logo">
							<div className="logo_img" />
						</div>
						<div className="head_item-container">
							<div className="head_line" />
							<a className="head_item" href="">Новое</a>
							<div className="head_line" />
							<a className="head_item">Топ</a>
							<div className="head_line long" />
							<a className="head_item only_auth" href="">Блог</a>
							<div className="head_line only_auth" />
							<a className="head_item only_auth">Дашборд</a>
							<div className="head_line only_auth" />
							<div class="user_container">
      					<div class="user_col_container">
          				<h4>Никита Латкович</h4>
          				<button>Выход</button>
      					</div>
      					<div class="user_col_container">
          				<img class="user_img" src="" alt="">
      					</div>
  						</div>
							<div id="empty" />
						</div>
					</div>
					<div className="hidden head_btn-container">
						{user ? (
							<a className="btn btn_head" href="" onClick={(e) => this.onSignOut(e)}>Выход</a>
						) : (
							<React.Fragment>
								<a className="btn btn_head" href="" onClick={(e) => this.openSignInModal(e)}>Вход</a>
								<a className="btn btn_head" href="" onClick={(e) => this.openSighUpModal(e)}>Регистрация</a>
							</React.Fragment>
						)}
					</div>
				</div>
				<SignInModal isOpen={signInOpen} onSubmit={(data) => this.onSignIn(data)} />
				<SignUpModal isOpen={signUpOpen} onSubmit={(data) => this.onSignUp(data)} />
			</React.Fragment>
		);
	}

}

Header.propTypes = {
	user: PropTypes.object,
	onSignOut: PropTypes.func.isRequired,
	onSignIn: PropTypes.func.isRequired,
	onSignUp: PropTypes.func.isRequired,
};

Header.defaultProps = {
	user: '',
};

export default connect(
	(state) => ({
		user: state.auth.get('user'),
	}),
	(dispatch) => ({
		onSignOut: () => dispatch(AuthActions.onSignOut()),
		onSignIn: (data) => dispatch(AuthActions.onSignIn(data)),
		onSignUp: (data) => dispatch(AuthActions.onSignUp(data)),
	}),
)(Header);

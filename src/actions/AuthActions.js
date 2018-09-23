/* eslint-disable import/no-cycle */
import * as AuthApi from '../api/AuthApi';
import AuthReducer from '../reducers/AuthReducer';
import BaseActionsClass from './BaseActionsClass';
import { DASHBOARD_PATH } from '../constants/RouterConstants';
import history from '../history';

class AuthActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(AuthReducer);
	}

	onSignIn(data) {
		return (dispatch) => new Promise((resolve, reject) => {
			AuthApi.signIn({ data }).then((response) => {
				dispatch(this.reducer.actions.setUser(response.result));
				const redirectUrl = DASHBOARD_PATH;

				history.push(redirectUrl);
			}).catch((error) => reject(error));
		});
	}

	onSignUp(data) {
		return (dispatch) => new Promise((resolve) => {
			AuthApi.signUp({ data }).then((response) => {
				dispatch(this.reducer.actions.setUser(response.result));
				const redirectUrl = DASHBOARD_PATH;

				history.push(redirectUrl);
				resolve();
			});
		});
	}

	onSignOut() {
		return () => new Promise((resolve) => {
			AuthApi.signOut().then(() => {
				resolve();
			});
		});
	}


}

const AuthActions = new AuthActionsClass();
export default AuthActions;

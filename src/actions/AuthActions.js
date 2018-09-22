/* eslint-disable import/no-cycle */
import { push } from 'react-router-redux';
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

	/**
	 * Allow to get info about your profile from server
	 * @returns {function(*=): Promise<any>}
	 */
	me() {
		return (dispatch) => new Promise((resolve, reject) => {
			AuthApi.me().then((response) => {
				dispatch(this.reducer.actions.init(response.result));
				resolve();
			}).catch(() => {
				dispatch(this.reducer.actions.clear());
				reject();
			});
		});
	}

	onSignIn(data) {
		return (dispatch) => new Promise((resolve, reject) => {
			AuthApi.signIn({ data }).then(() => {
				dispatch(this.me()).then(() => {

					const redirectUrl = DASHBOARD_PATH;

					history.push(redirectUrl);
				});
			}).catch((error) => reject(error));
		});
	}

	onSignUp(data) {
		return (dispatch) => new Promise((resolve) => {
			AuthApi.signUp({ data }).then(() => {
				this.onSignIn(data);
				dispatch(push('/dashboard'));
				resolve();
			});
		});
	}


}

const AuthActions = new AuthActionsClass();
export default AuthActions;

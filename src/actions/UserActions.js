/* eslint-disable import/no-cycle */
import * as UserApi from '../api/UserApi';
import AuthReducer from '../reducers/AuthReducer';
import BaseActionsClass from './BaseActionsClass';

class UserActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(AuthReducer);
	}

	/**
	 * Allow to get info about user from server
	 * @returns {function(*=, *): Promise<any>}
	 */
	getUser() {
		return (dispatch) => new Promise((resolve, reject) => {
			UserApi.getUser().then((response) => {
				dispatch(this.reducer.actions.setUser(response.result));
				resolve();
			}).catch(() => {
				dispatch(this.reducer.actions.clear());
				reject();
			});
		});
	}

	/**
	 * Allow to set info about user on server
	 * @returns {function(*=, *): Promise<any>}
	 */
	setUser(data) {
		return (dispatch) => new Promise((resolve, reject) => {
			UserApi.setUser({ data }).then(() => {
				dispatch(this.getUser());
				resolve();
			}).catch(() => {
				reject();
			});
		});
	}


}

const UserActions = new UserActionsClass();
export default UserActions;

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
		return (dispatch, getState) => new Promise((resolve, reject) => {
			const state = getState();
			const id = state.auth.get('id');
			UserApi.getUser(id).then((response) => {
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
			UserApi.setUser({ data }).then((response) => {
				console.log('set response');
				console.log(response);
				this.getUser();
				resolve();
			}).catch(() => {
				dispatch(this.reducer.actions.clear());
				reject();
			});
		});
	}


}

const UserActions = new UserActionsClass();
export default UserActions;

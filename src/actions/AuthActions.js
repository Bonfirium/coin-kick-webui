import * as AuthApi from '../api/AuthApi';
import GlobalReducer from '../reducers/GlobalReducer';
import BaseActionsClass from './BaseActionsClass';

class AuthActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(GlobalReducer);
	}

	/**
	 * Allow to get info about your profile from server
	 * @returns {function(*=): Promise<any>}
	 */
	me() {
		return (dispatch) => new Promise((resolve, reject) => {
			AuthApi.me().then((data) => {
				dispatch(this.reducer.actions.init(data.result));
				resolve();
			}).catch(() => {
				dispatch(this.reducer.actions.clear());
				reject();
			});
		});
	}

}

const AuthActions = new AuthActionsClass();
export default AuthActions;

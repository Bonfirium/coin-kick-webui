

import GlobalReducer from '../reducers/GlobalReducer';

class AuthActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		this.reducer = GlobalReducer;
	}

	func() {
	}

	/**
	 * Allow to get info about your profile from server
	 * @returns {function(*=): Promise<any>}
	 */
	me() {
		return (dispatch) => new Promise((resolve, reject) => {
			this.func().then((data) => {
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

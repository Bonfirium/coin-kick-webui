/* eslint-disable import/no-cycle */
import * as BlogApi from '../api/BlogApi';
import AuthReducer from '../reducers/AuthReducer';
import BaseActionsClass from './BaseActionsClass';
import ToastActions from './ToastActions';

class BlogActions extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(AuthReducer);
	}

	getProjects() {
		return (dispatch) => new Promise((resolve, reject) => {
			BlogApi.getProjects().then((response) => {
				dispatch(this.reducer.actions.setProjects(response.result.items));
				resolve(response);
			}).catch((error) => {
				ToastActions.toastError(error.message);
				reject(error);
			});
		});
	}

	sendCoins(id, value) {
		return () => new Promise((resolve, reject) => {
			BlogApi.sendCoins(id, value).then((response) => {
				ToastActions.toastSuccess('Монеты отправлены');
				resolve(response);
			}).catch((error) => {
				ToastActions.toastError(error.message);
				reject(error);
			});
		});
	}

}

const AuthActions = new BlogActions();
export default AuthActions;

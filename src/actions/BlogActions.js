/* eslint-disable import/no-cycle */
import * as BlogApi from '../api/BlogApi';
import AuthReducer from '../reducers/AuthReducer';
import BaseActionsClass from './BaseActionsClass';
import history from '../history';
import ToastActions from './ToastActions';

class BlogActions extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(AuthReducer);
	}

	getProjects(data) {
		return () => new Promise((resolve, reject) => {
			BlogApi.getProjects({ data }).then((response) => {
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

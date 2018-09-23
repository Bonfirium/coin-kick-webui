import UserActions from './UserActions';
import BaseActionsClass from './BaseActionsClass';

class GlobalActionsClass extends BaseActionsClass {

	/**
	 *  Actions after init app
	 * @returns {function(*): *}
	 */
	afterInit() {
		return (dispatch) => dispatch(this.loadData());
	}

	/**
	 * Set up application initial data
	 * @returns {function(*=): Promise<any>}
	 */
	loadData() {
		return () => new Promise(() => {

		});
	}

	/**
	 * Init app
	 * @returns {function(*=): Promise<any>}
	 */
	init() {
		return (dispatch) => new Promise((resolve) => {
			Promise.all([
				new Promise((res, rej) => { // Check smth
					dispatch(UserActions.getUser()).then(() => {
						res();
					}).catch((error) => {
						rej(error);
					});
				}),
			]).then((data) => {
				resolve(data);
			}).catch((error) => {
				resolve(error);
			});
		});
	}

}

const GlobalActions = new GlobalActionsClass();
export default GlobalActions;

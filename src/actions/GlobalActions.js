import React from 'react';
import AuthActions from './AuthActions';

class GlobalActionsClass {

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
					dispatch(AuthActions.me()).then(() => {
						res();
					}).catch((error) => {
						rej(error);
					});
				}),
			]).then((data) => {
				dispatch(this.afterInit()).then(() => {
					resolve(data);
				});
			}).catch((error) => {
				resolve(error);
			});
		});
	}
}

const GlobalActions = new GlobalActionsClass();
export default GlobalActions;
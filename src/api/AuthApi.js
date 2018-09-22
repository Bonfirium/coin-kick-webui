/* eslint-disable import/prefer-default-export */
import { get, post } from '../utils/Api';

/**
 * Get user from server
 * @returns {Promise<any>}
 */
export const me = () => new Promise((resolve, reject) => {
	get('/api/auth/me').then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

/**
 * Registrate new user
 * @param {Object} params
 * @param {Object} params.data
 * @param {String} params.data.email
 * @param {String} params.data.password
 * @returns {Promise<any>}
 */
export const signIn = (params = {}) => new Promise((resolve, reject) => {
	post('/api/auth/sign-in', params.data).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

/**
 * Registrate new user
 * @param {Object} params
 * @param {Object} params.data
 * @param {String} params.data.email
 * @param {String} params.data.password
 * @param {String} params.data.repeatPassword
 * @returns {Promise<any>}
 */
export const signUp = (params = {}) => new Promise((resolve, reject) => {
	post('/api/auth/sign-up', params.data).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

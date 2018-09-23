/* eslint-disable import/prefer-default-export */
import { get, patch } from '../utils/Api';

/**
 * Get user from server
 * @returns {Promise<any>}
 */
export const getUser = () => new Promise((resolve, reject) => {
	get('/api/user/').then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

/**
 * Set user on server
 * @param {Object} params
 * @param {Object} params.data
 * @param {String} params.data.displayName
 * @returns {Promise<any>}
 */
export const setUser = (params = {}) => new Promise((resolve, reject) => {
	patch('/api/user/displayName', params.data).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

/**
 * Get deposit address
 * @param {Object} params
 * @param {Object} params.data
 * @param {String} params.data.currency
 * @returns {Promise<any>}
 */
export const getDepositAddress = (params = {}) => new Promise((resolve, reject) => {
	get('/api/user/get-deposit-address', params.data).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

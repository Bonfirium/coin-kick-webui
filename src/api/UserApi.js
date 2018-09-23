/* eslint-disable import/prefer-default-export */
import { get, put } from '../utils/Api';

/**
 * Get user from server
 * @returns {Promise<any>}
 */
export const getUser = (id) => new Promise((resolve, reject) => {
	get(`/api/user/${id}`).then((data) => {
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
	put('/api/user/', params.data).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

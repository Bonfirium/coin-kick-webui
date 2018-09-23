/* eslint-disable import/prefer-default-export */
import { get, post } from '../utils/Api';

export const getProjects = () => new Promise((resolve, reject) => {
	get('/api/blog/').then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

export const getProject = (projectId) => new Promise((resolve, reject) => {
	get(`/api/blog/${projectId}`)
		.then((data) => resolve(data))
		.catch((error) => reject(error));
});

export const createProject = (params = {}) => new Promise((resolve, reject) => {
	post('/api/blog', params.data)
		.then((data) => resolve(data))
		.catch((error) => reject(error));
});

export const sendCoins = (id, value) => new Promise((resolve, reject) => {
	post(`/api/blog/${id}/send-coin`, { value })
		.then((data) => resolve(data))
		.catch((error) => reject(error));
});

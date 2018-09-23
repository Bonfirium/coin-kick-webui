/* eslint-disable no-undef,no-throw-literal */

const qs = require('qs');

const parseServerError = (error) => {
	const { message } = error;
	if (typeof message !== 'string') {
		if (Object.keys(message).length) {
			const firstKey = Object.keys(message)[0];
			return {
				status: error.status,
				message: `${firstKey}: ${message[firstKey] ? message[firstKey][0] : 'Error'}`,
				error: error.message,
			};
		}
		if (Array.isArray(error.message) && error.message.length) {
			return { status: error.status, message: error.message[0] };
		}
	}

	return { status: error.status, message: error.message };
};

export function get(url, params) {
	const query = qs.stringify(params);

	const headers = new Headers();
	const options = {
		method: 'GET',
		headers,
		cache: 'default',
		credentials: 'include',
	};

	return new Promise((resolve, reject) => {
		fetch(`${__API_URL__ + url}?${query}`, options).then((response) => {
			const contentType = response.headers.get('content-type');

			if (response.ok) {
				if (contentType && contentType.indexOf('application/json') !== -1) {
					return response.json();
				}
				return response.text();

			}
			return response.json().then((error) => {
				throw { status: error.status, message: error.error };
			});

		}).then((data) => {
			resolve(data);
		}).catch((error) => {
			reject(parseServerError(error));
		});
	});
}

export function post(url, params) {
	const options = {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		cache: 'default',
		credentials: 'include',
		body: JSON.stringify(params),
	};

	return new Promise((resolve, reject) => {
		fetch(__API_URL__ + url, options).then((response) => {
			const contentType = response.headers.get('content-type');
			if (response.ok) {
				if (contentType && contentType.indexOf('application/json') !== -1) {
					return response.json();
				}
				return response.text();

			}
			return response.json().then((error) => {
				throw { status: error.status, message: error.error };
			});

		}).then((data) => {
			resolve(data);
		}).catch((error) => {
			reject(parseServerError(error));
		});
	});
}

export function patch(url, params) {
	const options = {
		method: 'PATCH',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		cache: 'default',
		credentials: 'include',
		body: JSON.stringify(params),
	};

	return new Promise((resolve, reject) => {
		fetch(__API_URL__ + url, options).then((response) => {
			const contentType = response.headers.get('content-type');

			if (response.ok) {
				if (contentType && contentType.indexOf('application/json') !== -1) {
					return response.json();
				}
				return response.text();

			}
			return response.json().then((error) => {
				throw { status: error.status, message: error.error };
			});

		}).then((data) => {
			resolve(data);
		}).catch((error) => {
			reject(parseServerError(error));
		});
	});
}

export function put(url, params) {
	const options = {
		method: 'PUT',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		cache: 'default',
		credentials: 'include',
		body: JSON.stringify(params),
	};

	return new Promise((resolve, reject) => {
		fetch(__API_URL__ + url, options).then((response) => {
			const contentType = response.headers.get('content-type');

			if (response.ok) {
				if (contentType && contentType.indexOf('application/json') !== -1) {
					return response.json();
				}
				return response.text();

			}
			return response.json().then((error) => {
				throw { status: error.status, message: error.error };
			});

		}).then((data) => {
			resolve(data);
		}).catch((error) => {
			reject(parseServerError(error));
		});
	});
}

export function del(url, params) {
	const query = qs.stringify(params);

	const headers = new Headers();
	const options = {
		method: 'DELETE',
		headers,
		cache: 'default',
		credentials: 'include',
		// body: params
	};

	return new Promise((resolve, reject) => {
		// fetch(__API_URL__ + url, options).then(response => {
		fetch(`${__API_URL__ + url}?${query}`, options).then((response) => {
			const contentType = response.headers.get('content-type');

			if (response.ok) {
				if (contentType && contentType.indexOf('application/json') !== -1) {
					return response.json();
				}
				return response.text();

			}
			return response.json().then((error) => {
				throw { status: error.status, message: error.error };
			});

		}).then((data) => {
			resolve(data);
		}).catch((error) => {
			reject(parseServerError(error));
		});
	});
}

/* eslint-disable import/prefer-default-export */

/**
 * Concat all prop name in object with extended key(separate by '.')
 * @param {String} extendedKey
 * @param {Object} extendedObj
 * @returns {{}}
 */
export const extendObjectKey = (extendedKey, extendedObj) => Object.keys(extendedObj)
	.reduce((obj, key) => {
		obj[`${extendedKey}.${key}`] = extendedObj[key];
		return obj;
	}, {});

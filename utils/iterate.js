// -*- coding: utf-8 -*-

'use strict';

/*
 * Iterate an object
 *
 * @param {Object} object
 * @param {Function} object
 * @param {Object} context
 */
module.exports = function (object, callback, context) {
	for (var key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			if (callback.call(context, object[key], key, object) === false) {
				break;
			}
		}
	}
};

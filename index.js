// -*- coding: utf-8 -*-

/**
 * Universal Leet converter
 *
 * Using:
 * var leet = new Leet;
 *
 * // *Set the symbol position
 * leet.set('symbols', {
 *    a: '@'
 *    b: 'Гџ'
 *  });
 *
 * // Encode
 * leet.encode('abcd'); // @Гџ[)
 *
 * @author: Alexander Abashkin
 * @license: MIT, 2012
 */

'use strict';

var exports = require('./maps/exports'),
	iterate = require('./utils/iterate'),
	log = require('./utils/log');

/*
* @constructor
* @param {Object} options — {
*   numeric - An alternative numerical view
*   random  - Randomize results
* }
*/
var Leet = function (options) {
	this.options = options || {};
};

Object.defineProperties(Leet.prototype, {
	/* The symbol combinations */
	symbols: {
		value   : exports.symbols,
		writable: true
	},

	/* The phrase combinations */
	phrases: {
		value   : exports.phrases,
		writable: true
	},

	/* The numeric combinations */
	numeric: {
		value   : exports.numeric,
		writable: true
	},

	/*
	* Set data
	*
	* @param {string} type
	* @param {Object} data
	*/
	set: {
		value: function (type, data) {
			if (!(type in this)) {
				log.fail('Leet#set', 'Has been used non standard map',
					'"' + type + '"');
			}

			iterate(data, function (value, key) {
				var list = this[type]();

				if (!list[key]) {
					list[key] = [value];
				}
				else {
					var position = list[key].indexOf(value);

					if (position === 0) {
						return 0;
					}
					else if (position !== -1) {
						list[key].splice(position, 1);
					}

					list[key].unshift(value);
				}

				this[type] = function () {
					return list;
				};

			}, this);
		}
	},

	/*
	* Encodes the Latin characters in the Leet sequence
	*
	* @param {string} string
	* @return {string}
	*/
	encode: {
		value: function (text) {
			var phrases = this.phrases();

			// The phrases should be replaced at first
			iterate(phrases, function (value, key) {
				var item = value[this.position(phrases, key)];
				text = text.replace(new RegExp(key, 'g'), item);
			}, this);

			// Replace the remaining characters
			return text.replace(/./g, function (item) {
				var list = this.symbols();

				if (this.options.numeric) {
					list = this.numeric();
				}

				if (item in list) {
					return list[item][this.position(list, item)];
				}

				return item;
			}.bind(this));
		}
	},

	/*
	* Decode the Leet sequence
	*/
	decode: {
		value: function (text) {
			/*
			* There is no reason to implement this method:
			*   - high computational complexity
			*   - fuzzy search
			*   - low accuracy of the result
			*   - not always a bijective mapping
			*   - see https://www.google.com/webhp?hl=xx-hacker
			*/

			return text;
		}
	},

	/*
	* Get used position
	*
	* @private
	* @param {Object} list — {symbols, phrases, numeric}
	* @return {number}
	*/
	position: {
		value: function (list, key) {
			if (this.options.random) {
				return Math.floor(Math.random() * list[key].length);
			}

			return 0;
		}
	},

	toString: {
		value: function () {
			return '[Object Leet]';
		}
	}
});

module.exports = Leet;

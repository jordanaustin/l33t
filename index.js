// -*- coding: utf-8 -*-

/**
 * Leet (or "1337"), also known as eleet or leetspeak,
 * is an alternative alphabet for the English language
 * that is used primarily on the Internet
 *
 * Object Leet ([Boolean digit = false])
 *
 * Use:
 * var leet = new Leet();
 *
 * // *Set the symbol position
 * leet.set({
 *    a: 1, //@
 *    b: 2  //Гџ
 *  });
 *
 * // Extends the existing rules:
 * leet.extend('phrases', {
 *    foo: 1,
 *    bar: 2
 * });
 *
 * // Extends the existing set of symbols
 * // Note you'd to escape sequences like ',",\
 * leet.extend('symbols', {
 *    a: '/-\\',
 *    b: '\\>>'
 * });
 *
 * // Encode
 * var encode = leet.encode('foo is a big bar');
 *
 * // Result
 * console.log(encode); //1 !$ /-\\ \\>>![, 2
 *
 * @author: Alexander Abashkin
 * @params: {Boolean} [ digit ] - An alternative digital view
 * @license: MIT, 2012
 */

'use strict';

var symbols = require('./maps/symbols'),
	phrases = require('./maps/phrases'),
	iterate = require('./utils/iterate');

var Leet = function (digit) {
	this.digit = digit;
};

Leet.prototype = {
	constructor: Leet,

	/* Orthography list of the characters */
	symbols: symbols,

	/** Orthography list of the digits */
	phrases: phrases,

	cache: [],

	/*
	* Set the symbol position
	* @param {Object} data
	*/
	set: function (data) {
		this.cache.push(data);
	},

	/*
	* Returns the symbol position
	*
	* @param {number} symbol;
	* @return {number};
	*/
	find: function (symbol) {
		var items = {};

		// Set default positions
		iterate(this.symbols, function (value, key) {
			items[key] = 0;
		});

		// Set user positions
		this.cache.forEach(function (values) {
			iterate(values, function (value, key) {
				items[key] = value;
			});
		}, this);

		return items[symbol] | 0;
	},

	/*
	* Extends the existing rules:
	*   - this.symbols
	*   - this.phrases
	*
	* Use:
	*   leet.extend('phrases', {
	*       foo: 1,
	*       bar: 2
	*   });
	*
	*  @param {string} item
	*  @param {Object} values
	*/
	extend: function (name, values) {
		iterate(values, function (value, key) {
			if (name == 'symbols') {
				this.symbols[key].unshift(value);
			}
			else if (name == 'phrases') {
				this.phrases[key] = value;
			}
		}, this);
	},

	/*
	* Encodes the Latin characters in the Leet sequence
	*
	* @param {string} string
	* @return {string}
	*/
	encode: function (string) {
		// The phrases should be replaced at first
		iterate(this.phrases, function (value, key) {
			string = string.replace(new RegExp(key, 'g'), value);
		}, this);

		// Replace the remaining characters
		return string.replace(/./g, function (item) {
			var symbol = this.symbols[item];

			if (item in this.symbols) {
				//console.log(symbol, this.find(item));

				if (this.digit) {
					return symbol[symbol.length - 1];
				}

				return symbol[this.find(item)];
			}

			return item;
		}.bind(this));
	},

	/*
	* Decode the Leet sequence
	*/
	decode: function () {
		/*
		* There is no reason to implement this method:
		*   - high computational complexity
		*   - fuzzy search
		*   - low accuracy of the result
		*   - not always a bijective mapping
		*   - see https://www.google.com/webhp?hl=xx-hacker
		*/
	}
};

module.exports = Leet;

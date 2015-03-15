// -*- coding: utf-8 -*-

/*!
 * l33t tests
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2015
 */

'use strict';

var Leet = require('../../l33t');

exports.tests = {
	'encode.symbols': function (test) {
		var leet = new Leet;

		test.equal(leet.encode('abcd'), '/-\\|3[)');
		test.done();
	},

	'encode.numeric': function (test) {
		var leet = new Leet({numeric: true});

		test.equal(leet.encode('abcd'), '4650');
		test.done();
	},

	'set-symbols': function (test) {
		var leet = new Leet;

		leet.set('symbols', {
			c: '<',
			d: '[)'
		});

		test.equal(leet.encode('abcd'), '/-\\|3<[)');
		test.done();
	},

	'set-phrases': function (test) {
		var leet = new Leet;

		leet.set('phrases', {
			one : 'один',
			some: '<0M3',
		});

		test.equal(leet.encode('one two abcd some'), 'один 2 /-\\|3[) <0M3');
		test.done();
	},

	'set-numeric': function (test) {
		var leet = new Leet({ numeric: true });

		leet.set('numeric', {
			a: 0,
			0: 1,
		});

		test.equal(leet.encode('one a 0'), '1 0 1');
		test.done();
	},

	'custom.symbols': function (test) {
		var leet = new Leet;

		leet.symbols = function () {
			return {
				a: ['@']
			}
		};

		test.equal(leet.encode('ab'), '@b');
		test.done();
	},

	'custom.phrases': function (test) {
		var leet = new Leet;

		leet.phrases = function () {
			return {
				one: ['01']
			}
		};

		test.equal(leet.encode('one2'), '012');
		test.done();
	},

	'custom.numeric': function (test) {
		var leet = new Leet({numeric: true});

		leet.numeric = function () {
			return {
				a: ['01']
			}
		};

		test.equal(leet.encode('a2'), '012');
		test.done();
	}
};

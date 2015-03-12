/*!
 * l33t tests
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2015
 */

'use strict';

var Leet = require('../../l33t');

exports.tests = {
	'set': function (test) {
		var leet = new Leet;

		leet.set({
			c: 2, // <
			d: 2  //[)
		});

		test.equal(leet.encode('cd'), '<[)');
		test.done();
	},

	'symbol-table': function (test) {
		var leet = new Leet;

		leet.symbols = {
			a: ['/-\\']
		};

		test.equal(leet.encode('a'), '/-\\');
		test.done();
	},

	'phrase-table': function (test) {
		var leet = new Leet;

		leet.phrases = {
			one: ['один']
		};

		test.equal(leet.encode('one'), 'один');
		test.done();
	},

	'extend-symbols': function (test) {
		var leet = new Leet;

		leet.extend('symbols', {
			a: '^',
			b: ')3'
		});

		test.equal(leet.encode('ab'), '^)3');
		test.done();
	},

	'extend-phrases': function (test) {
		var leet = new Leet;

		leet.extend('phrases', {
			foo: 1,
			bar: 2
		});

		test.equal(leet.encode('foo bar'), '1 2');
		test.done();
	},

	'digital-view': function (test) {
		var leet = new Leet(true);

		test.equal(leet.encode('leet'), '073377');
		test.done();
	}
};

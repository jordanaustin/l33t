# l33t

[![npm version badge](https://img.shields.io/npm/v/l33t.svg)](https://www.npmjs.org/package/l33t)
[![Build Status](https://travis-ci.org/monolithed/l33t.png)](https://travis-ci.org/monolithed/l33t)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> Universal [l33t](https://en.wikipedia.org/wiki/Leet) converter


*Leet (or "1337"), also known as eleet or leetspeak is an alternative alphabet for the English language that is used primarily on the Internet.*


## License
	MIT


## Synopsis:

```javascript
Object Leet ([{ numeric: false, random: false }])
```


## Installation:

```shell
npm install l33t --save-dev
```


## Using
*For example you could use the following code:*

```javascript

var leet = new Leet;
leet.encode('leet'); // |_[-[-+
```

### API

#### .set

*Use the custom symbols*

```
var leet = new Leet; 

leet.set('symbols', {
	c: '<',
	d: '[)'
});

leet.encode('abcd'); /-\\|3<[) 
```

#### .phrases

*Use the custom phrases*

```
var leet = new Leet; 

leet.set('phrases', {
	one : 'один',
	some: '<0M3',
});

leet.encode('one two abcd some'); // один 2 /-\\|3[) <0M3 
```

#### .numeric

*Use the custom numeric values*

```
var leet = new Leet({ numeric: true });

leet.set('numeric', {
	a: 0,
	0: 1,
});

leet.encode('one a 0'); // 1 0 1 
```


#### options.numeric

*An alternative numeric view*

```
var leet = new Leet({numeric: true}); 

leet.encode('leet'); // 1337
```

#### options.random

*Randomize results*

```
var leet = new Leet({random: true}); 

leet.encode('leet'); // ВЈ|=-ë77
```


#### Advanced rules

You can set a personal hash-table like:

*symbols*

```
var leet = new Leet; 

leet.symbols = function () {
	return {
		a: ['@']
	}
};

leet.encode('abc'); // @bc
```

*phrases*

```
var leet = new Leet;

leet.phrases = function () {
	return {
		one: ['01']
	}
};


leet.encode('one2'); // 012
```

*numeric*

```
var leet = new Leet({numeric: true});

leet.phrases = function () {
	return {
		a: ['01']
	}
};

leet.encode('a2'); // 012
```


#### Default symbols

```js
{
	a: ['/-\\', '@', '/*\\', '/=\\', '/\\', '^', 'aye', 'λ', 'ci', 'Z', '(L', '∂', 4],
	b: ['|3', 'I3', '!3', 'ß', '(3', '/3', ')3', '|-]', ']3', 'j3', 6, 13, 8],
	c: ['[', '(', '<', '¢', '{', '©©', 'sea', 'see', 5],
	d: [')', '|)', '[)', '(|', '∂', '])', '|}', '|]', 'I>', '|>', '?', 'T)', 'I7',
		0, 'ð', 'cl', 2],
	e: ['[-', '£', '&', '€', 'ə', 'ë', '|=-', 3],
	f: ['|=', 'ʃ’', '|#', ']=', '/=', '}', 'ph', '(=', 'ƒ', 'v', 7],
	g: ['[,', '&', '(_+', 'C-', 'gee', 'jee', 'cj', '(?,', '{,', '<-', '(.', 6, 9],
	h: ['|-|', '\\-/', '/-/', '#', ']-[', '[-]', ')-(', '(-)', '|~|', '|-|', ']~[',
		'!-!', '1-1', ':-:', '}{', '}-{', 'I+I', '{-}', '\\=\\', '|=|', '|.|', '|=|',
		'|*|', 'aych', '?', 6],
	i: ['!', '|', 'eye', '3y3', 'ai', '¡', 1],
	j: ['_|', '_/', ',_|', '_]', ',_]', '._|', '._]', ']', '¿', '</', '_)', 'ʝ', '01'],
	k: ['|<', '>|', '1<', 'X', '|c', '|(', '|X', '|{', '05'],
	l: ['|_', 'ВЈ', '|', '|_', 'lJ', '£', '¬', 1, 7, '07'],
	m: ['/\\/\\', '|\\/|', 'em', '|v|', 'IYI', 'IVI', '[V]', '^^', 'nn',
		'//\\\\//\\\\', '(V)', '(v)', '{V}', '(\\/)', '|\\|\\', '/|\\', '/|/|',
		'<\\/>', '.\\\\', '/^^\\', '/V\\', '|^^|', 'AA', 44, '02'],
	n: ['|\\|', '^/', '/\\/', '//\\\\//', '₪', '[\]', '<\\>', '{\\}', '/V', '//', 'ท',
		'И', '[]\\[]', ']\\[', '~', '03'],
	o: ['()', 'oh', 'p', '<>', '[]', 'Ω', 'Ω', '¤', 0, '08'],
	p: ['|*', '|o', '|º', '|>', '|"', '|^', '?', '9', '[]D', '|7', 'q', '¶', '℗',
		'þ', '|D', 66],
	q: ['0_', '0,', '(,)', '<|', 'cue', '&', 9, 2, 99],
	r: ['|2', '|9', '|?', '/2', 'I2', '|^', '|~', '|-', 'lz', 'В', 'I2', '[z',
		'|`', 'l2', 'ʁ', '.-', 'Я', '®', 2, 44],
	s: ['$', 'z', '§', 'ehs', 'es', 5, 2, 55],
	t: ['+', '-|-', '\'][\'', '†', '~|~', '«|»', 7, 1, 77],
	u: ['|_|', '(_)', 'Y3W', 'M', '[_]', '\_/', '\_\\', '/_/', 'L|', 'v', 'µ', 'บ', 88],
	v: ['\\/', '√', '\\\\//', '007'],
	w: ['\\/\\/', 'vv', '\'//', '\\\\\'', '\\^/', '(n)', '\\X/', '\\|/', '\\_|_/',
		'\\\\//\\\\//', '\\_:_/', ']I[', 'UU', 'dubya', '\\V/', '\\X/', 'UU', '2u',
		'Ш', 'ɰ', '￦', 'JL', '008'],
	x: ['><', '%', 'Р–', '}{', 'ecks', 'Г—', '*', ')(', '][', 'ex', '001'],
	y: ['`/', 'j', '`(', '-/', '\'/', '\\//', 'φ', 'λ', 'Ч', '¥', 'Ψ', 7, '002'],
	z: ['≥', '-/_', '~/_', '-\\_', '-|_', '>_', 's', '%', '7_', 'ʒ', 2, '003']
};
```

#### Default phrases

```js
{
	'one'  : [1],
	'two'  : [2],
	'to'   : [2],
	'too'  : [2],
	'tree' : [3],
	'three': [3],
	'four' : [4],
	'for'  : [4],
	'five' : [5],
	'six'  : [6],
	'seven': [7],
	'eight': [8],
	'ait'  : [8],
	'ate'  : [8],
	'eit'  : [8],
	'nine' : [9],
	'ks'   : ['x'],
	'cs'   : ['x'],
	'and'  : [7],
	'anned': [7],
	'ant'  : [7],
	'yeah' : ['ya!'],
	'you'  : ['u'],
	'cool' : ['k1']
}
```

#### Default numeric values

```js
{
	a: [4],
	b: [6, 13, 8],
	c: [5],
	d: [0, 2],
	e: [3],
	f: [7],
	g: [6, 9],
	h: [6],
	i: [1],
	j: ['01'],
	k: ['05'],
	l: [1, 7, '07'],
	m: [44, '02'],
	n: ['03'],
	o: [0, '08'],
	p: [66],
	q: [9, 2, 99],
	r: [2, 44],
	s: [5, 2, 55],
	t: [7, 1, 77],
	u: [88],
	v: ['007'],
	w: ['008'],
	x: ['001'],
	y: [7, '002'],
	z: [2, '003'],
	0: [0],
	1: [1],
	2: [2],
	3: [3],
	4: [4],
	5: [5],
	6: [6],
	7: [7],
	8: [8],
	9: [9]
}
```


### Tests

```
npm test
```


### Links
[Leet](https://en.wikipedia.org/wiki/Leet)


Task submitted by [Alexander Abashkin](https://github.com/monolithed)

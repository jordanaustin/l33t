# l33t

[![npm version badge](https://img.shields.io/npm/v/l33t.svg)](https://www.npmjs.org/package/l33t)
[![Build Status](https://travis-ci.org/monolithed/l33t.png)](https://travis-ci.org/monolithed/l33t)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


> Universal [l33t](https://en.wikipedia.org/wiki/Leet) converter


*Leet (or "1337"), also known as eleet or leetspeak is an alternative alphabet for the English language that is used primarily on the Internet.*


##License
	MIT


##Synopsis:

```javascript
Object Leet ([Boolean digit = false])
```


##Installation:

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

#### .symbols

*Use a custom symbol-table*

```
var leet = new Leet; 

leet.symbols = { 
	a: ['/-\'']
};

leet.encode('a'); // /-\ 
```

#### .phrases

*Use a custom phrase-table*

```
var leet = new Leet; 

leet.phrases = {
	one: ['один']
};

leet.encode('one'); // один 
```

#### .set(Object)

*Set the symbol position*

```
var leet = new Leet; 

leet.set({
    c: 2, // <
    d: 2  //[)
});

leet.encode('cd'); // <[) 
```

#### .extend(String, Object)

*Extends the existing rules*

By symbol:

```
var leet = new Leet; 

leet.extend('symbols', {
    a: '^',
    b: ')3'
});

leet.encode('ab'); ^)3
```

By phrase:

```
var leet = new Leet; 

leet.extend('phrases', {
    foo: 1,
    bar: 2
});

leet.encode('foo bar'); // 1 2 
```

#### Leet(Boolean)

*An alternative digital view*

```
var leet = new Leet(true); 

leet.encode('leet'); // 073377 
```

### Tests

```
npm test
```


### Links
[Leet](https://en.wikipedia.org/wiki/Leet)


Task submitted by [Alexander Abashkin](https://github.com/monolithed)

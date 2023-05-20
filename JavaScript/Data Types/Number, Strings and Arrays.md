

#### Numbers

- In modern JavaScript, there are two types of numbers:

1.  Regular numbers in JavaScript are stored in 64-bit format [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754), also known as “double precision floating point numbers”. These are numbers that we’re using most of the time, and we’ll talk about them in this chapter.

2.  BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed `(253-1)` or be less than `-(253-1)`, as we mentioned earlier in the chapter [Data types](https://javascript.info/types). As bigints are used in few special areas, we devote them a special chapter [BigInt](https://javascript.info/bigint).



- Math functions

1) `Math.random()`

Returns a random number from 0 to 1 (not including 1).

```javascript
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)
```

2) `Math.max(a, b, c...)` and `Math.min(a, b, c...)`

Returns the greatest and smallest from the arbitrary number of arguments.

```javascript
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
```

3) `Math.pow(n, power)`

Returns `n` raised to the given power.


```javascript
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024
```

There are more functions and constants in `Math` object, including trigonometry, which you can find in the [docs for the Math object](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math).





#### Strings

 - Characters (these can be used to format stings in a certain way)

	1) `\n` - New line
	
	2) `\r` - In Windows text files a combination of two characters `\r\n` represents a new break, while on non-Windows OS it’s just `\n`. That’s for historical reasons, most Windows software also understands `\n`.
	
	3) `\'`, `\"`, `` \` `` - Quotes
	
	4) `\\` - Backslash
	
	5) `\t` - Tab
	
	6) `\b`, `\f`, `\v` - Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).


- The `length` property has the string length:

```javascript
alert( `My\n`.length ); // 3
```

Note that `\n` is a single “special” character, so the length is indeed `3`.


- Getting a substring

There are 3 methods in JavaScript to get a substring: `substring`, `substr` and `slice`.

1) `str.slice(start [, end])`

Returns the part of the string from `start` to (but not including) `end`.

```javascript
let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
```

If there is no second argument, then `slice` goes till the end of the string:

```javascript
let str = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end
```

Negative values for `start/end` are also possible. They mean the position is counted from the string end:

```javascript
let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'
```

2) `str.substring(start [, end])`

Returns the part of the string _between_ `start` and `end` (not including `end`).

This is almost the same as `slice`, but it allows `start` to be greater than `end` (in this case it simply swaps `start` and `end` values).

```javascript
let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)
```

Negative arguments are (unlike slice) not supported, they are treated as `0`.

3) `str.substr(start [, length])`

Returns the part of the string from `start`, with the given `length`.

In contrast with the previous methods, this one allows us to specify the `length` instead of the ending position:

```javascript
let str = "stringify";
alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
```

The first argument may be negative, to count from the end:

```javascript
let str = "stringify";
alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters
```

This method resides in the [Annex B](https://tc39.es/ecma262/#sec-string.prototype.substr) of the language specification. It means that only browser-hosted Javascript engines should support it, and it’s not recommended to use it. In practice, it’s supported everywhere.




#### Arrays

- Declaration

	There are two syntaxes for creating an empty array:
	
	```javascript
	let arr = new Array();
	let arr = [];
	```
	
	Almost all the time, the second syntax is used. We can supply initial elements in the brackets:
	
	```javascript
	let fruits = ["Apple", "Orange", "Plum"];
	```
	

- We can explicitly calculate the last element index and then access it: `fruits[fruits.length - 1]`.

```javascript
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum
```

A bit cumbersome, isn’t it? We need to write the variable name twice.

Luckily, there’s a shorter syntax: `fruits.at(-1)`:

```javascript
let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum
```


- `pop`

Extracts the last element of the array and returns it:

```javascript
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange
```

Both `fruits.pop()` and `fruits.at(-1)` return the last element of the array, but `fruits.pop()` also modifies the array by removing it.

- `push`

Append the element to the end of the array:

```javascript
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear
```

- `shift`

Extracts the first element of the array and returns it:

```javascript
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear
```

- `unshift`

Add the element to the beginning of the array:

```javascript
let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear
```


- Looping through an array

	One of the oldest ways to cycle array items is the `for` loop over indexes:
	
	```javascript
	let arr = ["Apple", "Orange", "Pear"];
	
	for (let i = 0; i < arr.length; i++) {
	  alert( arr[i] );
	}
	```
	
	But for arrays there is another form of loop, `for..of`:
	
	```javascript
	let fruits = ["Apple", "Orange", "Plum"];
	
	// iterates over array elements
	for (let fruit of fruits) {
	  alert( fruit );
	}
	```
	
	The `for..of` doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.


- Multi-dimensional arrays

	Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:
	
	```javascript
	let matrix = [
	  [1, 2, 3],
	  [4, 5, 6],
	  [7, 8, 9]
	];
	
	alert( matrix[1][1] ); // 5, the central element
	```


- Array methods dump : https://javascript.info/array-methods



##### Next, [[Map and Set]]


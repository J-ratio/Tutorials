- There are eight basic data types in JavaScript.
- Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.
- We can put any type in a variable. For example, a variable can at one moment be a string and then store a number. Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

## Types:

1) **Number
   - represents both integer and floating point numbers
   - Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: `Infinity`, `-Infinity` and `NaN`.
   - `NaN` represents a computational error. It is a result of an incorrect or an undefined mathematical operation.
     
2) **BigInt
   - In JavaScript, the “number” type cannot safely represent integer values larger than `(2^53-1)` (that’s `9007199254740991`), or less than `-(2^53-1)` for negatives.
   - `BigInt` type was recently added to the language to represent integers of arbitrary length.
     
3) **String
   - In JavaScript, there are 3 types of quotes.
	1.  Double quotes: `"Hello"`.
	2.  Single quotes: `'Hello'`.
	3.  Backticks: `` `Hello` ``.
   - Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in `${…}`	
     
4) **Boolean
   - true/false
     
5) **Null
   - In JavaScript, `null` is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
   - It’s just a special value which represents “nothing”, “empty” or “value unknown”.
   - For example, let number = null; This code suggests that the number variable is empty at the moment and may have a value later.
     
6) **Undefined
   - If a variable is declared, but not assigned, then its value is `undefined`
     
7) **Object
   
8) **Symbol






##### Next, [[Type Conversions]]
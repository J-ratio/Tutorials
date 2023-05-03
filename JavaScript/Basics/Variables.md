
- Unlike Compiler languages, JavaScript is a weakly typed programming language because **you do not have to specify the variable type in advance**.
- It recognizes different data types (numbers, strings, etc.), but doesn't use them strictly and tries to convert data when it seems reasonable.

So we can declare different datatypes with a single keyword like "let", "var" or "const".
eg  
```javascript
let message = 'Hello!'; 
```



#### Variable Naming
- The name must contain only letters, digits, or the symbols `$` and `_`.
- The first character must not be a digit.
- There is a [list of reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), which cannot be used as variable names because they are used by the language itself.



#### Using "var" vs "let"

- The `var` declaration is similar to `let`. Most of the time we can replace `let` by `var` or vice-versa and expect things to work.
- On the other hand, it’s important to understand differences when migrating old scripts from `var` to `let`, to avoid odd errors.


1) **"var" has no block scope
   
	 Variables, declared with `var`, are either function-scoped or global-scoped. They are visible through blocks.
		 
	 ```javascript
if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if
```

	If we used `let test` instead of `var test`, then the variable would only be visible inside `if`:

```javascript
if (true) {
  let test = true; // use "let"
}

alert(test); // ReferenceError: test is not defined
```


2) **"var" tolerates redeclaration
   
	With `var`, we can redeclare a variable any number of times. If we use `var` with an already-declared variable, it’s just ignored:
	
	```javascript
var user = "Pete";

var user = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John
```


3) **“var” variables can be declared below their use
   
	`var` declarations are processed when the function starts (or script starts for globals).
	So this works as intentended:
	
	```javascript
function sayHi() {
  phrase = "Hello";

  alert(phrase);

  var phrase;
}
sayHi();
```


	**Declarations are hoisted, but assignments are not.
	
	```javascript
function sayHi() {
  alert(phrase); // undefined

  var phrase = "Hello";
}

sayHi(); 
```



#### Using "const"
- To declare a constant (unchanging) variable, use `const` instead of `let`.
- Variables declared using `const` are called “constants”. They cannot be reassigned. An attempt to do so would cause an error.
- Important for many use cases, eg:
	```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```


##### Next, [[Basic Datatypes]]
There is another syntax for creating a function that is called a _Function Expression_.

It allows us to create a new function in the middle of any expression.

For example:

```javascript
let sayHi = function() {
  alert( "Hello" );
};
```

Here we can see a variable `sayHi` getting a value, the new function, created as `function() { alert("Hello"); }`.



#### Callback functions

- functions can be passed as arguments to other functions. Eg,

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

**The arguments `showOk` and `showCancel` of `ask` are called _callback functions_ or just _callbacks_.**



#### Arrow Functions

There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this:

```javascript
let func = (arg1, arg2, ..., argN) => {expression1; expression2; };
```

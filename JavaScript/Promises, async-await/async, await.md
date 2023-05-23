- Comfortable way to work with promises
- works very similar to the .Net framework 


##### Async functions

Let’s start with the `async` keyword. It can be placed before a function, like this:

```javascript
async function f() {
  return 1;
}
```

The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

Eg, both code samples below work the same way...

1) 
```javascript
async function f() {
  return 1;
}

f().then(alert); // 1
```

2) 
```javascript
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```


##### Await

The keyword `await` makes JavaScript wait until that promise settles and returns its result.

```javascript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```


Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

But there’s a syntax construct `try...catch` that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

The `try...catch` construct has two main blocks: `try`, and then `catch`:

```javascript
try {

  // code...

} catch (err) {

  alert(err.name);
  alert(err.message);
  alert(err.stack);
  // error handling

}
```


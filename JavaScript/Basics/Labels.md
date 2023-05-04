Sometimes we need to break out from multiple nested loops at once. This can be done using labels.


A _label_ is an identifier with a colon before a loop:

```javascript
labelName: for (...) {
  ...
}
```

The `break <labelName>` statement in the loop below breaks out to the label:

```javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
```


- Labels do not allow us to jump into an arbitrary place in the code

A `break` directive must be inside a code block. Technically, any labelled code block will do, e.g.:

```javascript
label: {
  // ...
  break label; // works
  // ...
}
```


##### Next, [[Function Expressions]]
The [JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) is a general format to represent values and objects. it’s easy to use JSON for data exchange when the client uses JavaScript.

JavaScript provides methods:

-   `JSON.stringify` to convert objects into JSON.
-   `JSON.parse` to convert JSON back into an object.

1) The full syntax of `JSON.stringify` is:

```javascript
let json = JSON.stringify(value, replacer, space)
```

- value - A value to encode.
- replacer - Array of object properties to encode in Json 
- space - Amount of space to use for formatting(Indent)

2) To decode a JSON-string, we need another method named `JSON.parse`.

```javascript
let value = JSON.parse(str, [reviver]);
```

 - str - JSON-string to parse.
 - reviver - Optional function(key,value) that will be called for each `(key, value)` pair and can transform the value.
    eg:
    ```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // now works!
```



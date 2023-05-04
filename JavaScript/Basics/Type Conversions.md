
- Most of the time, operators and functions automatically convert the values given to them to the right type.

- For example, `alert` automatically converts any value to a string to show it. Mathematical operations convert values to numbers.


### String Converstion

- String conversion is mostly obvious. A `false` becomes `"false"`, `null` becomes `"null"`, etc.

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```


### Numeric Conversion

- We can use the `Number(value)` function to explicitly convert a `value` to a number:
```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

```javascript
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
```

- Number(`undefined`) = `NaN`
- Number(`null`) = 0
- Number(`true`) = 1 and Number(`false`) = 0
- Number("   123   ") = 123 and Number( "  ") = 0


### Boolean Conversion

- Values that are intuitively “empty”, like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`
- Other values become `true`



##### Next, [[Labels]]



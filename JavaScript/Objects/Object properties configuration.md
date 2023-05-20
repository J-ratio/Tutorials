
#### Property flags

Object properties, besides a **`value`**, have three special attributes (so-called “flags”):

-   **`writable`** – if `true`, the value can be changed, otherwise it’s read-only.
-   **`enumerable`** – if `true`, then listed in loops, otherwise not listed.
-   **`configurable`** – if `true`, the property can be deleted and these attributes can be modified, otherwise not.

- Defining property flags
```javascript
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false ,
  enumerable: false ,
  configurable: false ,
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
```


#### Property getters and setters

Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

For instance, if we want to forbid too short names for `user`, we can have a setter `name` and keep the value in a separate property `_name`:

```javascript
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...
```



##### Next, [[Prototype]]

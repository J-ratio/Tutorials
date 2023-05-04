Acts as an ideal datatype for storing discreet data.
Collection of key value pairs.
Flexible with nested form of data.


#### Syntax

- Creating object variables
  ```javascript
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

- Initialization with values
  ```javascript
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

- Set/Get values from object
  
```javascript
// get property values
alert( user.name ); // dot notation
alert( user[name] ); // square brackets notation

// set property values 
let username = user.name; // dot notation
let username = user[name]; // square brackets notation
```

- Deleting a key-value pair
```javascript
delete user["name"];
```

- Check if a key exists in object
```javascript
//1
user.noSuchProperty === undefined // if a key doesnt exist, its value is returned as undefined

//2
"noSuchProperty" in user // returns false
```

- Iterating through object properties
```javascript
for (key in object) {
  // executes the body for each key among object properties
}
```


- Objects are ordered in a specific manner: integral key properties are sorted, others appear in creation order (order in which they were added).


##### Next, [[Object Cloning]]

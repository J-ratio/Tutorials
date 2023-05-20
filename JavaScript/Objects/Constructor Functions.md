
- Often we need to create many similar objects, like multiple users or menu items and so on. 
- One can abstract common properties of such objects and define them in a constructor function.
- Now, this constructor funtion can be used to create new objects with a function call using the operator `new`.

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```


##### Next, [[Object properties configuration]]

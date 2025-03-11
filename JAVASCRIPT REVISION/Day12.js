// Arrow Functions in JavaScript
// Arrow functions allow us to write shorter function syntax:
// () => { ... } // no parameter
// x => { ... } // one parameter
// (x, y) => { ... } // multiple parameters
//
// // example
const greet = () => {
  console.log("Hello World");
};
greet(); // Hello World

// example
const greet = name => {
  console.log("Hello " + name);
};
greet("John"); // Hello John
greet("Jane"); // Hello Jane
//


// Return / Without Return
// A function can include a return statement.
// The return statement specifies the value that the function should return.
// A function without a return statement will return undefined.
// example
function greet(name) {
    return "Hello " + name;
}
console.log(greet("John")); // Hello John

// arrow functions without return statement
const greet = name => "Hello " + name;
console.log(greet("John")); // Hello John
console.log(greet()); // undefined
//


// this Keyword and Arrow Functions
// In JavaScript, the thing called this, is the object that "owns" the code.
// The value of this, when used in a function, is the object that "owns" the function.
// The value of this, when used in an object, is the object itself.
// The this keyword in an object constructor does not have a value. It is only a substitute for the new object.
// The value of this will become the new object when a new object is created.
// example
function Person(name) {
    this.name = name;
}
var john = new Person("John");
console.log(john.name); // John

//

// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are best suited for non-method functions.
// example
const person = {
    name: "John",
    greet: function () {
        console.log("Hello " + this.name);
    }
};
person.greet(); // Hello John
//
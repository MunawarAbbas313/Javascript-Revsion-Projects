// Functions in JavaScript
// 1. Function Declaration
//function name(//optional parameters) {
    // code to be executed
//}
//example
function greet() {
    console.log("Hello World");
}
// excute the function
greet; // just execute the function
// calling the function
greet(); // Hello World

// function with parameters
function greet(name) {
    console.log("Hello " + name);
}
greet("John"); // Hello John
greet("Jane"); // Hello Jane

// Scope of a function
// Global Scope
// A variable declared outside a function, becomes global.
// A global variable has global scope: All scripts and functions on a web page can access it.
// Local Scope
// A variable declared within a function has local scope and can only be accessed within that function
// A local variable has local scope: It can only be accessed within the function where it is declared.
// Global and Local Scope
// A variable with global scope can be accessed from any function.      
// A variable with local scope can be accessed only within the function where it is declared.
// A variable with local scope can have the same name as a variable with global scope.
// The local variable will have precedence over the global variable.
// example
var name = "John"; // global variable
function greet() {
    var name = "Jane"; // local variable
    console.log("Hello " + name);
}
greet(); // Hello Jane
console.log("Hello " + name); // Hello John


// Nested functions
// A function can be declared inside another function.
// The inner function can access the variables of the outer function.
//example
function outerFunction() {
    var outerVariable = "I am outside!";
    function innerFunction() {
        console.log(outerVariable);
    }
    innerFunction();
}
outerFunction(); // I am outside!


// function with variables

const add = function (a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// Scoping of such functions
// The variables declared in the function are local to the function and can be accessed only within the function
//example
const add2 = function (a, b) {
    var result = a + b;
    return result;
}
console.log(add(2, 3)); // 5
//console.log(result); // ReferenceError: result is not defined
// The variables declared in the function are local to the function and can be accessed only within the function
//example
const add1 = function (a, b) {
    var result = a + b;
    console.log(result);
    }
    console.log(result); // ReferenceError: result is not defined



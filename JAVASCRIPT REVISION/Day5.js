// Memory In JavaScript

// 1. All premetive Data Types are stored in Stack Memory

let name = "Munawar";
let age = 20;
let isStudent = true;


// These are stored in Stack Memory
// they are stored in a fixed size memory
// They are called by value
// Changes in one variable does not affect other variables


// 2. Non-Premetive Data Types are stored in Heap Memory

let userOne = {
    name: "Munawar",
    age: 20,
    email: "munawar@gmail.com",
    city: "Islamabad",
    country: "Pakistan"
}

// These are stored in Heap Memory
// they are stored in a dynamic size memory
// They are called by reference
// Changes in one variable affects other variables

let userTwo = userOne;
userTwo.name = "Abbas";
console.log(userOne);
console.log(userTwo);


// 3. Functions are stored in Heap Memory

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// Functions are stored in Heap Memory
// they are stored in a dynamic size memory
// They are called by reference
// Changes in one function affects other functions


// 4. Arrays are stored in Heap Memory

let fruits = ["apple", "banana", "cherry"];

console.log(fruits);

let fruits2 = fruits;
fruits2.push("orange");
console.log(fruits);
console.log(fruits2);

// Arrays are stored in Heap Memory
// they are stored in a dynamic size memory
// They are called by reference
// Changes in one array affects other arrays


// 5. Objects are stored in Heap Memory

let userThree = {
    name: "Munawar",    
    age: 20,
    email: "munawar@gmail.com",
    city: "Islamabad",
    country: "Pakistan"
}

console.log(userThree);

let userFour = userThree;
userFour.name = "Abbas";
console.log(userThree);
console.log(userFour);









// Common JavaScript Interview Questions and Solutions

// Q1: What is the difference between null and undefined?
// A1: 
let a; // undefined - variable declared but not assigned a value
let b = null; // null - explicitly assigned empty value
console.log(typeof a); // "undefined" 
console.log(typeof b); // "object"

// Q2: What is hoisting in JavaScript?
// A2:
console.log(x); // undefined due to hoisting
var x = 5;
// Above code is interpreted as:
// var x;
// console.log(x);
// x = 5;

// Q3: How does pass by value vs pass by reference work?
// A3:
let num = 10;
let obj = {value: 10};

function change(num, obj) {
    num = 20; // pass by value - original not changed
    obj.value = 20; // pass by reference - original changed
}

change(num, obj);
console.log(num); // 10
console.log(obj.value); // 20

// Q4: What is closure in JavaScript?
// A4:
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

// Q5: Explain event bubbling
// A5:
/*
Event bubbling is when an event triggers on a nested element,
then triggers on its parents in order up through the DOM tree.
Example:
<div onclick="alert('div')">
    <button onclick="alert('button')">Click</button>
</div>
Clicking button alerts "button" then "div"
*/

// Q6: What is memory management in JavaScript?
// A6:
/*
JavaScript automatically manages memory through garbage collection.
The garbage collector finds and removes objects that are no longer reachable.
*/
let example = {
    data: "some data"
};
example = null; // Original object becomes eligible for garbage collection

// Q7: What causes memory leaks in JavaScript?
// A7:
/*
Common causes of memory leaks:
1. Global variables
2. Forgotten timers/callbacks
3. Closures holding references
4. DOM references
*/
// Example of a memory leak:
function createLeak() {
    window.leakyData = new Array(10000000); // Bad - creates global reference
}

// Better approach:
function noLeak() {
    let data = new Array(10000000); // Local variable will be garbage collected
}

// Q8: How do circular references affect memory?
// A8:
let obj1 = {};
let obj2 = {};
obj1.ref = obj2;
obj2.ref = obj1; // Creates circular reference
// Modern JavaScript engines can handle circular references
// But they used to cause memory leaks in older browsers

// Q9: What is the difference between Stack and Heap memory?
// A9:
/*
Stack: Stores primitive values and references
Heap: Stores objects and functions
*/
let stackVar = 42; // Stored in stack
let heapObj = { // Reference in stack, object in heap
    name: "example",
    data: [1, 2, 3]
};

// Q10: How to optimize memory usage?
// A10:
// 1. Clear event listeners
element.addEventListener('click', handler);
element.removeEventListener('click', handler); // Clean up when done

// 2. Use object pooling for frequent operations
const pool = [];
function getFromPool() {
    return pool.pop() || { /* default object */ };
}
function returnToPool(obj) {
    pool.push(obj);
}

// 3. Use closures sparingly
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

// 4. Minimize global variables
let globalVar = 10;

// 5. Use Web Workers for CPU-intensive tasks
// Web Workers run in a separate thread
// They don't have access to DOM or global window object

// Example:







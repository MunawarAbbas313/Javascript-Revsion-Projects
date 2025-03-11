// Loops in Javascript

/* 
1.For
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

2. While
while (condition) {
   
 increment / Decrementc
}

3. Do While
do {
    
} while (condition);
*/

 // For loop
 for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
 }


 // While loop
    let index = 0;
    while (index < array.length) {
        const element = array[index];
        index++;
    } 


// Do while 
let index1 = 0;
do {
    const element = array[index];
    index1++;
} while (index < array.length);



// For Each
// used to iterate over an array
// example
const colors = ["red", "green", "blue"];
colors.forEach(color => {
    console.log(color);
});
// expects a call back function
// the callback function expects an element, index and array
// the callback function can take 3 parameters
// Does not return anything
// Does not change the original array


// Map
// used to iterate over an array
// example
// map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// map() does not execute the function for array elements without values.
// map() does not change the original array.
const numbers = [1, 2, 3];
const doubled = numbers.map(number => {
    return number * 2;
});

// Filter
// used to iterate over an array
// 


// Reduce
// used to iterate over an array
// example
const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((accumulator, current) => {
    return accumulator + current;
}
, 0);
console.log(sum); // 15

// Definations
// Takes an accumulator and a current value
// Returns the accumulator
// The accumulator is the sum of all the previous values
// The current value is the current value in the array
// The initial value is 0



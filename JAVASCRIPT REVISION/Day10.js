// // Destructuring of Objects in JavaScript

// // Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and arrays. 
// // It allows us to unpack values from arrays or properties from objects into distinct variables.

// Example of Object Destructuring
const user = {
    id: 1,
    name: "John",
    email: "john@example.com",
    address: {
        city: "New York",
        state: "NY",
        country: "USA"
    }
};

const {id, name, email} = user;
console.log(id, name, email);

// Destructuring the user object

// Destructuring nested objects
const { address: { city, state, country } } = user;

console.log(city);    // New York
console.log(state);   // NY
console.log(country); // USA

// Destructuring with default values
const { phone = "N/A" } = user;
console.log(phone); // N/A

// Destructuring with renaming variables
const { name: userName, email: userEmail } = user;
console.log(userName);  // John
console.log(userEmail); // john@example.com

// // Function parameter destructuring
function displayUser({ id, name, email }) {
    console.log(`ID: ${id}, Name: ${name}, Email: ${email}`);
}
 // ID: 1, Name: John, Email: john@example.com
// displayUser(user); // ID: 1, Name: John, Email: john@example.com

// // Interview Questions on Object Destructuring

// // 1. What is object destructuring and why is it useful?
// //    - Object destructuring is a syntax in JavaScript that allows you to extract properties from objects and assign them to variables. 
// //      It is useful because it makes code more readable and concise, especially when dealing with objects with many properties.

// // 2. How can you provide default values in object destructuring?
// //    - You can provide default values by using the assignment operator (=) within the destructuring pattern. 
// //      For example: const { prop = defaultValue } = object;

// // 3. Can you rename variables while destructuring? How?
// //    - Yes, you can rename variables by using a colon (:) followed by the new variable name. 
// //      For example: 
// //      const { originalName: newName } = object;
// //      const user = { id: 1, name: "John" };
// //      const { name: userName } = user;
// //      console.log(userName); // John

// // 4. How do you destructure nested objects?
// //    - You can destructure nested objects by using a nested pattern. 
// //      For example: 
// //      const { nestedObject: { nestedProp } } = object;
// //      const user = { id: 1, address: { city: "New York" } };
// //      const { address: { city } } = user;
// //      console.log(city); // New York

// // 5. What happens if you try to destructure a property that doesn't exist in the object?
// //    - If you try to destructure a property that doesn't exist, the variable will be assigned the value `undefined` unless a default value is provided.

const {detales} = user;
console.log(detales);



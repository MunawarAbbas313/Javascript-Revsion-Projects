// Onjects Part 2 
// Nested Objects

const user = {
    id: 1,
    name: "John",
    email: "john@example.com",
    address: {
        city: "New York",
        state: "NY",
        country: "USA"
    }
}

console.log(user.address.city);
console.log(user.address.state);
console.log(user.address.country);


// Combining Objects using Assigend Operator
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = Object.assign({}, obj1 , obj2);
console.log(obj3);


// Combining Objects using Spread Operator
const obj4 = {...obj1, ...obj2};
console.log(obj4);


// Objects inside Arrays
const userList = [
    {id: 1, name: "John", email: "john@example.com"},
    {id: 2, name: "Jane", email: "jane@example.com"},
    {id: 3, name: "Jim", email: "jim@example.com"}
]   

console.log(userList[0].name);


// Accessing the Keys of object suing Object.keys
const user1 = {
    id: 1,
    name: "John",
    email: "john@example.com"
}

console.log(Object.keys(user1));

// Accessing the Values of object suing Object.values
console.log(Object.values(user1));

// Accessing the Entries of object suing Object.entries
console.log(Object.entries(user1));










// Obbjects in javaScript

// Decleration
// object in litral
const nameOfObj = {
    namme : "Munawar",
    age :18,
    city : "islamabad",
    email :"munawargolden3@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

}
// Accessing the object
// Dot Notation
console.log(nameOfObj.namme);
console.log(nameOfObj.age);
console.log(nameOfObj.city);
console.log(nameOfObj.email);
console.log(nameOfObj.isLoggedIn);
console.log(nameOfObj.lastLoginDays);

// // Bracket Notation
// console.log(nameOfObj["namme"]);
// console.log(nameOfObj["age"]);
// console.log(nameOfObj["city"]);
// console.log(nameOfObj["email"]);
// console.log(nameOfObj["isLoggedIn"]);
// console.log(nameOfObj["lastLoginDays"]);

// // Singleton objects or constructor
// const user = new Object();

// user.id = "12345";
// user.name = "Munawar";
// user.isLoggedIn = false;

// console.log(user);

// //

// Objects with functions
nameOfObj.greeting = function(){
    console.log(`Hello, ${this.namme} welcome to our website`);
}

nameOfObj.greeting();



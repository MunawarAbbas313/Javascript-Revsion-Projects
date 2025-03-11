// Datatypes converion in javascript
// Important for interviews

// 1.String to Number
let score = "100";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);



console.log("Now with other examples");


let Score = "100abc";
console.log(typeof Score);

let ValueInNumber = Number(Score);
console.log(typeof ValueInNumber);
console.log(ValueInNumber);

//      returns NAN because it is not a number but its type is number


// 2. Number to String
let num = 100;
console.log(typeof num);

let StringValues = String(num);
console.log(typeof StringValues);
console.log(StringValues);

let Num2 = 100.5;
console.log(typeof Num2);

let StrinGValue = String(Num2);
console.log(typeof StrinGValue);
console.log(StrinGValue);


// 3. Boolean to String
let isLoggedIn = true;
console.log(typeof isLoggedIn);

let StringValue = String(isLoggedIn);
console.log(typeof StringValue);
console.log(StringValue);

let isLoggedIn2 = false;
console.log(typeof isLoggedIn2);

let StringValue2 = String(isLoggedIn2);
console.log(typeof StringValue2);
console.log(StringValue2);

//  4. Boolean to Number
let   isLoggedIn3 = true;
console.log(typeof isLoggedIn3);

let NumberValue = Number(isLoggedIn3);
console.log(typeof NumberValue);
console.log(NumberValue);

// r eturns 1 because true is 1 and false is 0


// 5   . String to Boolean
let Str = "truexy";
console.log(typeof Str);

let BooleanValue = Boolean(Str);
console.log(typeof BooleanValue);
console.log(BooleanValue);


let EmptyStr = "";
console.log(typeof EmptyStr);

let BooleanValue2 = Boolean(EmptyStr);
console.log(typeof BooleanValue2);
console.log(BooleanValue2);


// returns true with string with any value and false with empty string


// 6. Number to Boolean
let Num = 0;
console.log(typeof Num);

let BooleanValue3 = Boolean(Num);
console.log(typeof BooleanValue3);
console.log(BooleanValue3);

let Num3 = 1;
console.log(typeof Num3);

let BooleanValue4 = Boolean(Num3);
console.log(typeof BooleanValue4);
console.log(BooleanValue4);

// returns false with 0 and true with any other number




let a = null;
console.log(typeof a);

let ans = Number(a);
console.log(typeof ans);
console.log(ans);




let b ;
console.log(typeof b);

let ans2 = Number(b);
console.log(typeof ans2);
console.log(ans2);



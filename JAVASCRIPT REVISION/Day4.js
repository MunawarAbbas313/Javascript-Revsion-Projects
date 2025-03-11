// Basic Cnversion Interview prep
// 1. String with a number 
console.log("1" + 2);
// returns 12

// 2. Number with a string 
console.log(1 + "2");
// returns 12

// Now string with a string 
console.log("Munawar" + "Abbas");
// returns MunawarAbbas

// Now two numbers and one string at End

console.log(1 + 2 + "3");
// returns 33

// Now two strings and one number at End

console.log("1" + "2" + 3);
// returns 123

// Now two strings and one number at Start

console.log("1" + 2 + 3);
// returns 123
// Explaination
/*
Let's break down the evaluation step by step:
First, "1" + 2
Since "1" is a string, the + operator performs string concatenation
2 is coerced into a string
Result: "12"
Then, "12" + 3
Since "12" is a string, the + operator again performs string concatenation
3 is coerced into a string
Final result: "123" 
*/



//Prefic and PostFix


// Postfix
let  scoreCount = 100;
      scoreCount++;
      console.log(scoreCount);
      // returns 101
      // In postfix increment (x++), the original value is returned first
      // Then the increment happens after that line executes



// Prefix

let scoreCount2 = 100;
      ++scoreCount2;
      console.log(scoreCount2);
      // returns 101
      // In prefix decrement (++x), the decrement/Increment happens first
      // Then the value is returned
      

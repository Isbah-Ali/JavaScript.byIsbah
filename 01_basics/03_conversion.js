let score = "Isbah"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);   // NaN will be the result bec the variable type is not a Number
//console.log(valueInNumber); 


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Isbah"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "isbah" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ^^^^^^^^^^^^^^^^^^^ Operations ^^^^^^^^^^^^^^^^^^^^

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2); 
// console.log(2*2);
// console.log(2**3); 
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Isbah"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);  // output: 122
// console.log(1 + 2 + "2");   // output: 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

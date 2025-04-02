// DATES:

let myDate = new Date()
console.log(myDate); // OUTPUT: 2025-04-02T06:44:53.653Z
console.log(myDate.toString()); // OUTPUT: Wed Apr 02 2025 06:44:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()) // OUTPUT: 4/2/2025, 6:46:30 AM
console.log(typeof myDate)  // OBJECT

let mynewDate = new Date(24,0,3)  // In JS: Months start from Zero i.e: 0 Month = January
console.log(mynewDate.toDateString());
// BUT when giving date in format of YY/MM/DD OR MM/DD/YY then month will start from 01 i.e: 01 is January not 00
let myCreateddate = new Date("2024-01-15")
console.log(myCreateddate.toLocaleString());


// Gives Time and Date
let anotherDate = new Date(2024,0,3,5,3)  
console.log(anotherDate);

// TIME STAMPS:
let myTimeStamp = Date.now()
console.log(myTimeStamp)  // OUTPUT: 1743577657494 {These are milliseconds}

console.log(myCreateddate.getTime())  // return the milliseconds of that date
 // COMAPRISON IS ALWAYS DONE IN MILLISECONDS

let IsDate = new Date()
console.log(IsDate);
console.log(IsDate.getDay());
console.log(IsDate.getMonth()); // will return the same way 0= January, 1= Feb and so on
//  for the correct month and no confusion for client or user:
console.log(IsDate.getMonth() +1); // Now January = 1
IsDate.toLocaleString("default". {
    day: Monday
})
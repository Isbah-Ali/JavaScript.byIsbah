"use strict"; // treat all js code as newer version

// alert(3+3) // it wont work // we are using node.js not browser

// typeof      [returns the data type of variable]
// instanceof 	Returns true if an object is an instance of an object type

// PRIMITIVE

// number // 2 to the power of 53
// bigint // not much used
// string ""
// boolean  // true/false
// null // standalone value (empty)  // let state = null;  // when we check datatype by typeof : it returns object
// undefined // declared but not assigned any value // let state;
// symbol  == unique

const id = Symbol("123") 
console.log(typeof(id))  // returns Symbol

// REFERENCE  (NON-PRIMITIVE)

/*
Arrays:
      ["Apple", "Banana", "Orange"]
Objects:
 {
     name: "Isbah"
     Age: 21
 } 
Functions:
    // definition   function() {}

for. e.g:
     const Myfunc function(){
     console.log("Hello World!");
     }
 */     
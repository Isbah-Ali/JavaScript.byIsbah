// STRING INTERPOLATION
let name = "Isbah Ali"
let age = 21
console.log(`Hello I am ${name} and my age is ${age}.`);

// Creating String Object (using keyword new)
const myname = new String ("Ayesha Ali") // the datatype will remain string
console.log(myname[3])
console.log(myname.__proto__)  // shows that it is an object (TYPE)
console.log(myname.charCodeAt(1)) // returns the unicode of the character at the given index

// There are 3 methods for extracting a part of a string:
       // slice(start, end)   if only 1 parameter is given like slice(2) so characters till 2 will be cut and rest is printed
       // substring(start, end)
       // substr(start, length)

       
//split(seperator)   
text = "hello-world"
console.log(text.split("-"))
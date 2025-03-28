// STACK  {Stores Primitive Datatypes}
let myname = "Isbah Ali"

let mysister = myname
mysister = "Ayesha ALi"

console.log(myname);   // prints Isbah Ali
console.log(mysister); // prints Ayesha Ali
// In stack a copy is created so no change in actual variable




// HEAP   {Stores Non-Primitve Datatypes}

// However in Heap refernce is created so the new varraible points or refers to the actual variable

let user_one = {
    name : "Isbah Ali",
    id : 120
}
let user_two = user_one
user_two.name = "Arshad Ali"

// Both will print Arshad Ali because in an object or heap changes are made to actual object
console.log(user_one.name);
console.log(user_two.name);

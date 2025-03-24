const id = 120151
let Ename = "Isbah Ali"
var password = "12345"
Mycity = "Karachi"  // not  a good method but we can declare variable without even using keyword

// id = 20  // it is already a constant variable (TypeError: Assignment to constant variable)
Ename = "Ayesha Ali"
Mycity = "Islamabad"
console.log(id);
console.table([id, Ename, password, Mycity]); // will print with the changes made to variables

/* prefer not to use var 
because of isuue in block scope and functional scope*/
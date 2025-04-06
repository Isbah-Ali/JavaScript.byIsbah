// singleton
  /*The Singleton pattern in JavaScript ensures that a class has only one instance and provides a 
    global access point to that instance.  This is useful for managing shared resources or state across an application.*/

    // Object Literals:

    // Creating an object
    const obj = {} // These curly braces is an object atm its empty but it contains keys and values

    const mySymbol = Symbol("key1") // decaring a symbol

    const JSuser = {
        name: "Isbah Ali",
        age: 21,
        city: "Karachi",
        [mySymbol] : "It's a symbol" // using the symbol as a key in object 
    }
    console.log(JSuser.name)
    console.log(JSuser["name"]) // without qoutations it wont execute
    console.log(JSuser[mySymbol])

    JSuser.age =25 // changed the age 
    console.log(JSuser["age"])
    console.log(JSuser["city"])
  //  Object.freeze(JSuser) // This freezes th eobject and now no chnage can be made.
    JSuser.city ="Islamabad"
    console.log(JSuser["city"]) // it will still remain Karachi {NO CHANGE due to freeze}
console.log(JSuser)
 /*  {
    name: 'Isbah Ali',
    age: 25,
    city: 'Karachi',
    [Symbol(key1)]: "It's a symbol"
  } */

JSuser.greeting = function(){
    return "Hello JSUSER"
}
console.log(JSuser.greeting())

JSuser.greeting_name = function(){
    console.log(`Hello ${this.name}`) // using string interpolation to print hello with name 
  // keyword: "this" is used to refer the variable for the same object 
  }
JSuser.greeting_name();

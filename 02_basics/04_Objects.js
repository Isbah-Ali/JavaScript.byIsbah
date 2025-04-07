// singleton

const obj = new Object()
console.log(obj) // OUTPUT: {} Empty object

const user={   // we can create nested objects:
    username: {
        name : "Isbah",
        userfullname: {
            firstname : "Isbah",
            lastname: "Ali"
        }
    }
}

console.log(user.username.userfullname.firstname) // willprint only Isbah

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}

//const obj3 = {obj1, obj2}   // OUTPUT: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// To store elements of two ojects in a single new object:

// FIRST METHOD:
const obj3 = Object.assign({}, obj1 , obj2) 
console.log(obj3) 

// SECOND METHOD:
const obj4 = {...obj1, ...obj2}   // ... is a seperator operator
console.log(obj4)

// Objects in Array:

const MultiUsers= [
    {
        id : 1 ,
        name : "Isbah"
    },
    {
        id :2 ,
        name : "Ayesha"
    },{

    },
    {

    }
] 

console.log(MultiUsers[0].name) // prints: Isbah

console.log(Object.keys(obj4)) // Array of all keys: OUTPUT: [ '1', '2', '3', '4' ]
console.log(Object.values(obj4)) // Array of all values: OUTPUT: [ 'a', 'b', 'a', 'b' ]
console.log(Object.entries(obj4)) // Nested Array: OUTPUT: [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'a' ], [ '4', 'b' ] ]

console.log(obj4.hasOwnProperty(1)) // OUTPUT: true
console.log(obj4.hasOwnProperty(9)) // OUTPUT: false key 9 doesn't exist
      
         /// IMPORTANT

/* We can access elements by dot method or sqaure brackets 
 but if we want to use one of the elemnt again and agin we will use another way*/

 const profile = {
    Fullname: "Isbah Ali",
    course: "JavaScript"
 }

 const {Fullname: name} = profile // Now name is the variable which will access the element: Fullname
 console.log(name) // OUTPUT: Isbah Ali  


 /* 
   JSON = JavaScript Object Notation
   it can be declared with{} or even by array:
 */

//{
  //   "name" : "Isbah Ali",
   //  "Age" : "20"
// }

    [
    {},
    {},
    {}
    ]
console.log("THE END")
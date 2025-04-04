const names = ["Isbah", "Ayesha"]
const Father = ["Arshad", "Usman"]

//names.push(Father) // names array will contain Father array.
console.log(names) // OUTPUT: [ 'Isbah', 'Ayesha', [ 'Arshad', 'Usman' ] ]

const fullNames = names.concat(Father)  // This function Gives a new array after concatenation
console.log(fullNames)

const NAMES= [...names, ...Father] // this do the same as concat but is more good to use bc we concat more values here by ,...var
console.log(NAMES)  

const another_array = [1,2,3,[4,5,6],7,[8,9,[2,5]]]
const single_array = another_array.flat(Infinity) // In these braces give the depth of array like here is 3 but giving infintiy
console.log(single_array) // gave a single array with all elements (of subarrays too)   

console.log(Array.isArray("Isbah"))  // OUTPUT: False
console.log(Array.from("Isbah"))  // OUTPUT: ['I', 's', 'b', 'a', 'h'] CREATES AN ARRAY

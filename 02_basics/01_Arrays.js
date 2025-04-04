// ARRAYS:
// When copy operations are used, shallow copies are made means both original and copy is changed

const myarr = [2,4,6,8]
const myarr2 = new Array(20,30,40,50)
console.log(myarr2[1])

// ARRAY METHODS
myarr.push(15)
myarr.push(35)
myarr.pop()

myarr.unshift(65)    /* OUTPUT  [
    65, 0, 1,  2,
     3, 4, 5, 15 ] */


myarr.shift()
  /* OUTPUT   [
    0, 1,  2, 3,
    4, 5, 15]   */

console.log(myarr)

console.log(myarr.includes(5)) // boolean type [if that value is present or not]
console.log(myarr.indexOf(5)) 
// If the value is not present then index will return -1

// .join method converts Array into string:
const newarray = myarr.join()
console.log(newarray)  // square brackets removed

console.log("A ", myarr)

// slice AND splice:

// slice operation DONOT manipulates the original array
console.log(myarr.slice(1,3))  // OUTPUT: [ 4, 6 ]
console.log("After Slice: ", myarr) // OUTPUT After Slice:  [ 2, 4, 6, 8, 15 ]

// splice operation manipulates the original array
console.log(myarr.splice(1,3)) // OUTPUT: [ 4, 6, 8 ]
console.log("After Splice: ", myarr) // OUTPUT: After Splice:  [ 2, 15 ]



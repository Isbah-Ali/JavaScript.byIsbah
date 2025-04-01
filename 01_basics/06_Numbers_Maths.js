const score = 100
console.log(score)

const balance = new Number(200)
console.log(balance)

console.log(balance.toString().length) // length of balance is returned
console.log(balance.toFixed(3)) // Gives Decimal value upto 3 decimal

const num = 25.336
console.log(num.toPrecision(3)) // will print 3 numbers: 25.3 
console.log(num.toPrecision(2)) // will print 2 numbers: 25 
console.log(num.toPrecision(1)) // 3e+1


const zeroes = 100000000
console.log(zeroes.toLocaleString()) // returns with commas  { by default gives in US standard }
console.log(zeroes.toLocaleString("en-IN")) // return in endian Standard
 

//                    MATHS:
console.log(Math) // returns Object [Math]  {}
console.log(Math.abs(-5))
console.log(Math.round(-7.6)) 
// Also have ceil and floor function for round off  
// Min and Max functions also 

console.log(Math.random())  // gives values between 0 and 1
console.log((Math.random()*10)+1)   // +1 to avoid 0
console.log(Math.floor(Math.random()*10)+1)   // for single digit and not decimal value   

max = 15
min = 25

// To have random value between 15 AND 25:
console.log(Math.floor(Math.random() * (max -min +1)) +min) // +min to start from given min number 

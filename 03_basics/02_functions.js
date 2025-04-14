// When you dont know how many values can a user pass to the function

function calculateCost(...num1){ // Here ...num1 will create an array named num1 and ill store all the given values
        return num1;
}
console.log(calculateCost(20,50,60,90,2000)); // OUTPUT: [ 20, 50, 60, 90, 2000 ]

// if we write (val1, val2, ...num1 ) then val1 and val2 will not be printed and further values will bw stored in the array

// PASSING OBJECTS AS PARAMETERS


const user ={
       name: "Isbah",
       price: 199       
}

function handleObject (anyObject){
        console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user) // OUTPUT: Username is Isbah and price is 199

// If variable name is different like instead of price its prices then we dont get desired output

const user2={
        name: "Ayesha",
        prices: 200
}
handleObject(user2) // OUTPUT: Username is Ayesha and price is undefined

// we can even directly pass the object in argument :
handleObject({
        name: "Shazia",
        price: 300
})

function add_num(num1, num2){
    return num1+num2
}
console.log(add_num(2,4))

// OR:

function multiply(num1, num2){
    console.log(num1*num2)
}
multiply(3,6)

// JavaScript donot checks datatypes we have to do  it manually
//  with 3 + null only 3 will be printed

//

function logged_in_msg(username){
           return `${username} just logged in`
}

console.log(logged_in_msg("Isbah"))    // OUTPUT: Isbah jsut logged in

console.log(logged_in_msg())    // OUTPUT: Undefined jsut logged in



function loggedIn(username){
    if (username === undefined){ // if (!username) THIS IS MORE GOOD CODE bec undefined is FALSE 
       // so means if username is not TRUE, it is FALSE i.e undefined, hence then the block will run
        return `Please enter a username`;
    }

    return `${username} just logged in`
}

console.log(loggedIn());
console.log(loggedIn("Ayesha"));
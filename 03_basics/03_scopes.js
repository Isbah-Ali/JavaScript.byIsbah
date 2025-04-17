// Local and global scopes

// In JavaScript conditional loop blocks and function blocks are called scopes 

if (True){   // when we write if(True) means the scope wiill definitely run
  console.log("Isbah here")
}

function one(){
  const user = "Isbah"

  function two(){
    console.log(user)
  }
}

one() // This will print variable user's value


addone(5)   // it will run the function
function addone(num){
  return num +1;
}

addtwo(6)  
// this wont run the below function because the function is right now an expression as it is stored as a variable  
// it's HOISTING
const addtwo = function (){
  return num+2;
}

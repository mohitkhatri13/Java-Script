//nested scopes
// closures - n JavaScript, closures are a powerful feature that allows a function to access variables from its outer (enclosing) scope, even after the outer function has returned. Essentially, a closure is created when an inner function "remembers" and can still access variables from its parent function's scope, even after the parent function has finished executing.
function one(){
    const username = "mohit"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

// functionm declaration 
console.log(addone(2)); // 3
function addone(num){
    return num+1;
}

// console,.log(addtwo(2)) / give error - addtwo not declared - hoisting

// that type of function declaration is also known as expression or function expression 
const addtwo = function(num){
    return num+2;
}



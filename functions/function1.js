function saymyname(){
    console.log("mohit");
}

saymyname();

// function add(num1 , num2){
//     console.log( num1+ num2);
// }

function add(num1 , num2){
    return (num1+ num2);
}
const result =add(1 , 3)
console.log(`Result: ${result}`);

function loginuser(username){
    if(username ===undefined){ // (!username)
        console.log("please enter the username")
        return
    }
     return `${username} just logged in `
}
console.log(loginuser("mohit")) 



function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // we r just setting the username ina nother function 
    // for this we have to call funcion explicitely because if we not use call to store the reference 
    // of setusername because if we not do this than all information get deleted after deleting of execution context 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
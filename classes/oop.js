// Object literal 
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
user.getUserDetails()

// Constructor Function 

 // these are constructor functions - they just give uss complete new instance of object or copy 
// const promiseOne = new Promise();
// const data = new Date();




//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
} 

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); // this is reference to itself
console.log(userOne);
console.log(userTwo)

/*
// Points regarding new keyword 
1. first an empty new object is created k/a new nstance
2. constructor function call by new keyword and pack all argument and data 
3.  all the arguments get injected into this keyword 
4. than this get return 
*/
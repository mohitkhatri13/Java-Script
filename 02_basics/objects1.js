// singleton - when object is made by constructor than it is singleton 
// or if we declare it with a literals than ir is not a singleton 

// object literals - 
// Object.create  this is constructor method
const mysym = Symbol("key1");
console.log(mysym);

const  user = {
    name:"mohit",
    age:22,
    location:"Jaipur",
    isLoggegIN:false,
    lastlogin:["Mohit","Saturday"],
    "gf":"mm", // this can be assessed by only second method
    // this is how we use symbol as  a key
    [mysym]:"mykey1",
   // note this can be fine mysym:"mysym1" but if we check the datatype of mysym it will come as string not symbol hence internally it is not symbol
}  
//access methods 
console.log(user.name);
console.log(user["name"])
console.log(user[mysym]) // this is how we access symbols which is declared in objects

// Object.freeze(user); // by this no one able to change the value of the objects

// this is how we add function in the objects
user.greetings = function(){
    console.log("Hello world");
}
user.greetings2= function(){
    console.log(`hello world ${user.name}`);
}
console.log(user.greetings());
console.log(user.greetings2());


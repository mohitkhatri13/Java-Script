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



// difference between singleton and on singleton 


/*

Aspect	            Singleton	                                    Non-Singleton
Instance Count	    Only one instance exists.                       Multiple instances can be created.
Memory Usage	    Single instance, lower memory overhead.	        More instances, more memory usage.
Global State	    Shared state across the application.	        Each instance maintains its own state.
Object Creation  	Controlled, often with lazy initialization.	    Normal object creation with new keyword.
Use Cases	        Database connections, logging, configurations.	Users, products, or any other entity requiring multiple objects.
*/

//Singleton: When you want to ensure that there is only one instance of a class throughout the application, especially when dealing with resources that should be shared (e.g., databases, logging).
//Non-Singleton: When you need multiple instances of a class, each with its own independent state.
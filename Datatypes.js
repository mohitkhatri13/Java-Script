// depend on how the data store in memory the datatypes are categorised  in two category

// primitives  or non reference types
//  means rhey are call by value which refers wehn we call these value from mrmory we receive copy of these not value which references to same memory
//  String , NULL , Number , Boolean , Undefined
//Symbol - kisi bhi value ko unique banane ke liye symbol banane ke liye eg in frontend if we want to make any component or button unique
//BigInt - for large values



// Non Primitivies or referenced types
// Array , Objects , Functions


// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
/* eg - const score = 100
 const scoreValue = 100.3
both above have NUMBER datatype float etc not avaiable in js

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

*/
const id = Symbol('123')
const anotherid= Symbol('123')
console.log(id ===anotherid)  //not same

// const bigNumber = 4235872348694769n
// this automatically store in bigIng behind the scenes







/* 1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory. */




        const heroes = ["shaktiman" , "naagraj" , 'doga'];

     let myObject = {
            name:"mohit",
            age:22  }

            // function
       const myfunction =function(){
        console.log("Hello world");
            }


            // their datatypes
            // Null - Object
            // function - fucntion but we said it as objeect function

            // object - function
    console.log(typeof myfunction)
    console.log(typeof heroes);

    // function ko chod  kr non primitive ka datatype hamesha function object hota hai 


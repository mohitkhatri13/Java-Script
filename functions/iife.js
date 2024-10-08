//immediately invoked function expression
// aisa function jo jaise likha turank  execute ho gaya
// EventTarget. - to connect the database and not want to pollute the local  variables from global scope variables 


// snytax - names iife
(function chai(){
    console.log("db connected");
})();

// arrow fxn syntax - unnamed iife
((name)=>{
    console.log(`db connected2 ${name}` );
})("mohit");
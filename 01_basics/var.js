const accountId =12425
let accountEmail = "mohit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // this is bad practice 
let hello

// accountId = 32352  not allowed

// prefer not to use var for declaring variables
// because it has isse regarding block scope and functional scope

// console.log(accountId);
// console.table([accountId , accountEmail , accountPassword , accountCity , hello]);

{
     let accountEmail = "dsgas";
     var accountPassword=45465;
   console.log(accountEmail)
}
console.log(accountPassword)

// you can see that the variable declare with var has global scope if it is declared outside the blocks and its value changes when same name var assigned with new value but it is not true for let

if(score>100){
  var power  = 100;
}
console.log(power) // this can be run because we declare power by using var inside a if but if we use let or const than it will destroy as the of block destroyed 



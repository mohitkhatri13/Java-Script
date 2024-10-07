// we have two types of memory in js
//heap , stack memory
// stack- with primitives 
// heap - (non primitives)

// eg of primitives pr non referenced variable 
// this go in stack memory

let myname = "MohitKhatri"
let anothername = myname
anothername= "harshBatra"
console.log(anothername)
console.log(myname)


// eg  referenced variable or non primitives
// this goes in heap memory
let user  = {
    email:"hello@gmail.com",
    id:1234
}
let usertwo = user
usertwo.email="mohit@gmail.com";
console.log(usertwo)
console.log(user)

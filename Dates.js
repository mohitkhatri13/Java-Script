//dates in js 
// in future proposal temoporal is launched for use the dates values effectively 

let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// console.log(typeof myDate);// object 

// how to declare date
// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3)
// syntax two 
// let myCreatedDate = new Date("2023-01-24")

// third method 
let myCreatedDate = new Date("01-13-2002")
// console.log(myCreatedDate.toLocaleString())


let mytimestamps = Date.now()
// console.log(mytimestamps)  // this time come in ms 
// console.log(myCreatedDate.getTime())

console.log((Math.floor(Date.now()/1000))) // IN SECONDS


let newDate = new Date()

console.log(newDate);

console.log(newDate.toLocaleString('default' , {
    weekday:"long",
    
}))




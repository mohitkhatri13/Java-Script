const score= 400

console.log(score);
const balance = new Number(200);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4))


const hundreds = 1000000
// this convert or add commas to long integers according to indian readable

console.log(hundreds.toLocaleString('en-In'))


// maths
console.log(Math)  // math library 
// console.log(Math.abs(-12));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));

// console.log(Math.max(1,2,3,4));
// console.log(Math.min(1,2,3,4));

console.log(Math.random()); // random value from 0 to 1
console.log(Math.floor(Math.random()*10) + 1);
const min = 10;
const max = 20;

// +1 for avoid zero value 
console.log(Math.floor(Math.random()*(max - min +1))+min)



 

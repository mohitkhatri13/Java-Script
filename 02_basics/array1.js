// multiple type of data can be stored in a single array in js 
const arr = [1 , 2  ,3,4,5, "mohit" ,  true];
// for( let i of  arr){
//     console.log(i);
// }

// js array copy operation create shallow copy ( referenced copy)
// deep copy - non referenced copy do not shared the same referenced 


// arr.push(10);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(10); // not preferable because it has to shift all elements of the data add element in front 
//arr.shift pop out from front



// console.log(arr.includes(9));
// const newarr = arr.join() // this newarr is string type 
// console.log(newarr)


// slice or splice
console.log("A " , arr);

const newarr = arr.slice(0 , 2);
console.log(newarr)

console.log("B " , arr);

const newarr2 = arr.splice(0 , 2);
console.log("C " , arr);
console.log(newarr2);


// slice return the part of the array which we want and not manipulate the original array
// splice also do the same but  changes also reflect in original array 





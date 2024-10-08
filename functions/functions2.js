// rest operator - used to pass multiple values in the functions
function calculatecartprice(val1 , val2 ,...num1){
    return  num1
    }

console.log(calculatecartprice(100 , 200 , 300, 400 ))



//object passing in functions
const user = {
    username:"paneer",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);

// array passing in js

const mynewarray = [200 , 400 , 100 , 600];

function returnsecond(getArray){
    return getArray[1];
}
console.log(returnsecond(mynewarray))



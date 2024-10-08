// objects declared with constructor or as singleton
const nondingleton = {} // this is not singleton objects
const tinderuser = new Object(); // this is singleton objects
// console.log(tinderuser);

tinderuser.id = "123abc"
tinderuser.name="Sam"
tinderuser.islogged = false;
// console.log(tinderuser);

const regularuser = {
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"mohit",
            lastname:"khatri"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);
 
// how to merge two objects
const obj1 = {1:"a" , 2:"b"};
const obj2 = {3:"c", 4:"d"}

//using assign method
const obj3 =Object.assign({} , obj1 , obj2);
//{} this is target object and all value assign to this it is not compulsory to use this you can directly use existing object in which you can copy in it 
console.log(obj3);

// using spread operator most useful 
const obj4 = { ...obj1 , ...obj2}
console.log(obj4);



console.log(Object.keys(tinderuser)); // this return data in form of array
console.log(Object.values(tinderuser))


console.log(Object.entries(tinderuser)) // less use but it created a array of each key:value pair


// to check the avaiability of property 
console.log(tinderuser.hasOwnProperty('islogged'))

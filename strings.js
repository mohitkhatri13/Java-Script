const name = "Mohit"
const repo = 50
//old syntax not recommended 
// console.log(name + repo + " Value")

//modern syntax recommended using backtics k/a string interposition 
console.log(`my name is ${name} and my repo cnt is ${repo}`)

const gamename = new String("hello-g");
console.log(gamename[0]);

// some methods of string 
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.charAt(3));
console.log(gamename.indexOf('l'));
const newstring = gamename.substring(0 , 4);
console.log(newstring);

// slice can take -ve values but substring not 
const anotherstring = gamename.slice(-8 , 2)
console.log(`Another string is ${anotherstring}`)

const newstringone = "    hitesh ";
console.log(newstringone.trim())  // trim only work with whitespace characters 

const url = "https://mohit.com/mohit%20khatri"


console.log(url.replace('%20','-'))

console.log(url.includes("mohit"));

console.log(gamename.split('-'));






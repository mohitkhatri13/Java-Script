let score = "33abc"
// console.log(typeof score);
// console.log(typeof(score));
// two methods of checking datatypes

// but if we strictly assign a value

let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
//but here it a  case iin which score has alnum
// console.log(valueInNumber);

//  Some key points regarding conversion
//"33" =>33    , type - number
//"33abs"=> NaN type - number
//undefiined =>NaN   - type  - Number

let isloggedIn = 1;
let booleanisLoggedIn = Boolean(isloggedIn);
// console.log(booleanisLoggedIn);
// 1 = > true , 0=>false
// "" = >false
// "mohit"=>true

let somenumber = 343
let stringNumber = String(somenumber)
// console.log(stringNumber)
// console.log(typeof stringNumber);


// Operations 
//  / , + - , 8
 
let str1 = "hello"
let str2 = " hitesh"
let str3= str1 + str2
console.log(str3)

console.log("1" +2);
console.log("1" + 2 + 2);
// if string is first tham all things converted to things
console.log(1 + 2 + "2");
// if num is first tham all things converted to things
// for see how to work read ecma documentation

//  not good practices
// console.log(+true);
// console.log(true+)l
// console.log(+false)


 
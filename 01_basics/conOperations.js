let score = "33abc"
// console.log(typeof score);
// console.log(typeof(score));
// two methods of checking datatypes

// but if we strictly assign a value

let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
//but here it a  case in which score has alnum 
//eg - score = 33abc
// than Number can try to  work to convert it to number datatype which is problem is js to solve this we study typescript
// console.log(valueInNumber); not it return NaN 

//  Some key points regarding conversion expllicitly using number
//"33" =>33    , type - number
//"33abs"=> NaN but its type is number yehh this is confusing we know similarly 
//undefined =>NaN   - type  - Number


//is we explicitely use Boolean
let isloggedIn = 1;
let booleanisLoggedIn = Boolean(isloggedIn);
// console.log(booleanisLoggedIn);
// 1 = > true , 0=>false
// "" = >false
// "mohit"=>true
//null - 0
//undefined - Nan
// string - Nan

// explicitly in string 

let somenumber = 343
let stringNumber = String(somenumber)
// console.log(stringNumber)  -343
// console.log(typeof stringNumber);  -  string  


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


 
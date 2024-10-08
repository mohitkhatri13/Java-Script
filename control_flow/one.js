// implicit scope
const balance = 200;
// not a good practice 
// if( balance<200) console.log("test"), console.log("test2");


// switch - case 
const month = 2;
switch(month){
    case 1:
        console.log("jan")
        break;
        case 2:
        console.log("Feb")
        break;
        case 3:
        console.log("March")
        break;
        default:
        console.log("none")
        break;
}
// if we not use break than all cases execute after matched case including default


//truthy value 
const useremail = "abc@gmail.com" // it is considered as truthy value
if(useremail){
    console.log(useremail);
}
else{
    console.log("not have email")
}

// falsy values are - 
// 1. false , 0 , -0, BigInT -0n,"" , null,
// undefined, Nan  
// rest of this all are truthy values
// eg- "0", 'false', " ", [] , {} , function(){}


// how to check array is falsy or not or empty or not
const arr = [];
if(arr.length===0){
    console.log("falsy");
}
// for objects 
const obj = {};
if(Object.keys(obj).length===0){
    console.log("empty object")
}

// general knowledge
// false==0  true
// false==''true
// 0=='' true



//nullish coalescing operator (??) : for null 
//  and undefined


// it is used to handle null cases if it null than second case execute if not than first result work like  ternary operator but not completely ternary opearator

let val1;
val1 = 5 ?? 10
val2 = null??10  // undefined:10
console.log(val1);
console.log(val2);

// ternary opearator
condition? true:false




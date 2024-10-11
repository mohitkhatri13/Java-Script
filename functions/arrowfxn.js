const user = {
    name:"mohit",
    price:999,
// this is used to access current context 
    welcomemessage:function(){
            console.log(`${this.name}, welcome to the website`)
            // console.log(this);
    }
}
// user.welcomemessage(); // mohit...
// user.name = "harsh"
// user.welcomemessage(); // harsh.... 
// console.log(this)




function chai(){
    const username = "mohit"
    console.log(this.username); // undefined hence this not work in function 
}
chai();


const chai1 = function(){
    const username = "mohit"
    console.log(this.username); // undefined hence this not work in function 
    
}
chai1();

//Arrow fxn

const chai2 = ()=>{
    const username = "mohit"
    console.log(this.username);
   
}
chai2();

// the differnence between arrow function and normal function is the current context of the arrow function is empty object and for normal function is many values.


// m1- of declaring arrow fxn
// explicit return
const addtwo = (num1 , num2)=>{
 return num1 + num2;
}

// m2- of declaring arrow fxn
// ka implicit return 
const addtwo1 = (num1 , num2)=>  num1 + num2;

// m3
// if we use parenthesis than not need to use return but if we use curly braces than we have to use return keyword
const addtwo2= (num1 , num2) =>(num1 + num2)





const objectreturn = ()=> ({username:"mohit"})

console.log(objectreturn());

// curly braces me return krna padta hai kyu?
//  because we started a new scope by using curly braces






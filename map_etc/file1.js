// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values =coding.forEach((item)=>{
//     console.log(item);
//     return item;  // means forEach not return the values hence we have to choose another method for another operations
// })

// curly braces me return krna padta hai kyu?
//  because we started a new scope by using curly braces
const myNums = [1,2,3,4,5,6,7,8,9,10];

let values = myNums.filter((num)=>(
num>4))
// console.log(values);


//map
const  myNums2 = [1,2,3,4,5,6,7,8,9,10];

let y = myNums.map((num)=>{
    return num= num+1;
})
// console.log(y);



//chaining
const  myNums3 = [1,2,3,4,5,6,7,8,9,10];
let z = myNums3.map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=>{
         return num>=40})
    console.log(z);


    //reduce 
    const initialvalue = 0;
    const nums = [1,2,3];
    let a = nums.reduce((acc , curr)=>{
        return acc+ curr;
       
    }, acc= initialvalue)
        console.log(a);

    
       

      







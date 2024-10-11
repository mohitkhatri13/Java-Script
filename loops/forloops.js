// for 
// for(let index = 0 ; index<=10 ; index++){
//     console.log(index);
// }

// for of for arrays  , maps
const arr = [1 , 2 ,3 , 4, 5];
for (const num of arr) {
    console.log(num)
}
const greetings = "hello dunia!";
for( const greet of greetings){
    console.log(greet);
}

// maps similarly like c++ unrordered_maps
const map = new Map();
map.set('In' , "India")
map.set('Fr' , "France")
console.log(map);

for ( let [key , value] of map){
    console.log(key , ':-' , value);
}

//for in loops  - objects
// objects 
const myObejcts = {
    game1:"PUBG",
    game2:"Valo"}

for ( let key in myObejcts ){
    console.log(`${key}  for ${myObejcts[key]}`);
}
// for in loops works for the data structure which are based upon key value pairs 
// array also are key value pairs in which keys are their index 
// hence for in also work for array
const arr2 = ["mohit" , 'anmol' , 'muskan' , 'disha']
for( let k in arr2){
    console.log(`keys are ${k} and therir values are ${arr2[k]}`)
}

// note - for in not works for maps



// FOR Each loops- these are higher order loops 
// higher order refers to a function pass from it 

const lang = ["cpp" ,"python" , "java" , "react"];

// lang.forEach( function (item) {
//      console.log(item);
// })
// by arrow function
lang.forEach(  (item)=> {
    console.log(item);
})

// there are also many other parameters = 
// (item , index , arr)



// iteration for json data 0 using forEach 
const mycoding = [
    {name:'mohit',
        lang:"cpp"
    },
    {name:'Amritesh',
        lang:"Python"
    },
    {name:'Abhinav',
        lang:"Machine learning"
    }
]

mycoding.forEach((item)=>{
    console.log(item.name)
})

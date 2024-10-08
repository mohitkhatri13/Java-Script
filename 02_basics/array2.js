const marvel_heroes = ["thor", "Ironman","spiderman"]
const dc_heroes = ["superman", "flash" , "batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes) // not a good result

// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);


//push add second array in first array
// concat return new array after merging


// method-3
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

// flat the array 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]


// give depth of the array in the flat method 
const real_another_arr =another_array.flat(Infinity);
console.log(real_another_arr);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));

console.log(Array.from({name:"hitesh"}))// interesting for interview because in this type of cases we have to declare that which detail array we want either it of keys or values 

let score1 = 100;
let score2 =200;
let score3 = 300;
// we can use wither .of or .from 
console.log(Array.of(score1, score2 , score3));





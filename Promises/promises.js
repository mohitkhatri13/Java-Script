const promise1 = new Promise(function (resolve, reject) {
    // do an async task 
    // db task , crytography , network
    setTimeout(function () {
        console.log('Async task is complete')
        resolve(); // this is used to connect the .then
    }, 1000)
})

promise1.then(function () {
    console.log("Promise Consumed");
})

// also
// new Promise(function(resolve , reject){
//     // do an async task
//     // db task , crytography , network
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve(); // this is used to connect the .then
//     } , 1000)
// }).then(function(){
//     console.log("Promise Consumed");
// })

// data consumption
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Mohit", email: "chaiandcode" }) //  this is how we pass the data in .then function
    }, 1000)
}).then(function (user) {
    console.log(user);
})


// their is a callback hell problem while using this 
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "mohit", pass: 123 })
        }
        else {
            reject('Error Somethng went wrong')
        }
    }, 1000)})

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (err) {
    console.log(err);
}).finally(()=>{
    console.log("The promised is either resolved or rejected")
})


// async and await 
// benefit is we not have to handle the error explicitely we can 
// get rid from call back hell 

const promise5 = new Promise(function(resolve , reject){
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", pass: 123 })
        }
        else {
            reject('javascript Somethng went wrong')
        }
    }, 1000)
})


async function consumepromise5(){
    try{
        const result =  await promise5
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
consumepromise5();


// fetching api using fetch =  fetch method return a promise so we need to take care of it 

async function getallusers(){
     try {
         const res = await fetch('https://api.github.com/users/mohitkhatri13');
         const result = await res.json();
         console.log(result);
     } catch (error) {
        console.log(error);
     }
}

getallusers();


// fetching api by .then pr catch 
fetch('https://api.github.com/users/mohitkhatri13').then((response)=>{
  return response.json();
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>console.log(err))
  







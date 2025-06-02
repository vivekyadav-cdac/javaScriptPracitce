//A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//How to create promises

// promise takes a callback
// callback has two parameters resolve and reject
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB call, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
}) 

// resolve method is connected to .then()
// then is used to consume promise when Promise get resolved

promiseOne.then(function(){
    console.log("promise resolved")
})

// this can be also done using chaining

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("set time out called async task complete")
        resolve();
    },1000)
}).then(function(){
    console.log("second promise consumed")
})

// we can also pass any object through resolve to then
// passed data can be anything -> an object, an array, a function

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'vivek',
            email: 'vivek@example.com'
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// resolve is connected to then 
// if reject is connected to catch
// finally is always executed irrespective of resolve or reject

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false

        if(!error){
            resolve({username :'Vivek Yadav',
                password :'1234'
            })
        }
        else{
            reject('ERROR something went wrong')
        }
    },1000)
})

// chaining can be done where more than one then() exists 
// return forwards the value from one to next then()
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>console.log(username))
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("promise is either resolved or rejected"))

// promise can also be handled using async await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        
        if(!error){
            resolve({
                username : 'javaScript',
                password :'12324'
            })
        }else{
            reject('ERROR : js error')
        }
    })
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }  
}

consumePromiseFive()


//this is not a consumption promise but we are just consuming api using async await

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(data); 
//     } catch (error) {
//         console.log('E :',error);
        
//     }
// }
// getAllUsers()

// same above function using promise

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))
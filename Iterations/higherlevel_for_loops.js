// for of loop
const myArray = ["js","cpp","java","python"];

const myObj = {
    js:'javascript',
    cpp:'C++',
    java:'java',
    py:'python'
}

const map = new Map();
map.set('IN','India')
map.set('USA','United States Of America')
map.set('Fr','France')

// for (const key of myArray) {
//     console.log(key)
// }

// Object is not iterable so below for of loop gives error 
// TypeError: myObj is not iterable

// for (const key of myObj) {
//     console.log(key);
    
// }

/* below code provides the key value pair in the form of array

[ 'IN', 'India' ]
[ 'USA', 'United States Of America' ]
[ 'Fr', 'France' ]
 */

// for (const key of map) {
//     console.log(key);
    
// }

// to get separate access of key value we need to destructure the array
// happens in case of map only

// for (const [key,value] of map) {
//     console.log(`key : ${key} and value: ${value} `);
// }

/*For in Loop*/


/* below key output is index only b/c for in loop provides only key */

// for (const key in myArray) {
//     console.log(key);
       
// }

/* to get value also use key as index */

// for (const key in myArray) {
//     console.log(`${myArray[key]}`);
    
// }

/* for in loop works for object */

// for (const key in myObj) {

//    console.log(` ${key} :- ${myObj[key]}`);

// }

/* for in loop doesn't work for map

it will not throw any error but will not give any output 
because map is not iterable */

// for (const [key,value] in map) {
//     console.log(key);
    
// }

/*FOREACH loop*/

/* any iterable object i.e array has forEach() function as its property
    it takes a callback function as its argument */

// myArray.forEach((item)=>{
//     console.log(item);
    
// })

/* we can also write call back function separately and give its reference */

// function callBack(item){
//     console.log(item);
    
// }

// myArray.forEach(callBack);

/* forEach doesn't work for map and object as both are not iterable */

// myObj.forEach((item)=>{
//     console.log(item);
// })

// TypeError: myObj.forEach is not a function

/*forEach is specifically designed for arrays */

// we can iterate through array of objects using for each

// const objArray = [
//      {
//         langName :'javascript',
//         langFile : 'js'
//      }
//      ,
//      {
//         langName :'java',
//         langFile : 'java'
//      },
//      {
//         langName : 'python',
//         langFile : 'py'
//      }
// ]

// objArray.forEach((item)=>{
//     console.log(item.langName);
// })
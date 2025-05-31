// as in forEach loop does not return any value so we can't filter directly to store in an array

const myArray = ["js","cpp","java","python"];

/* below code gives undefined value */

// const newArray = myArray.forEach((item)=>{
//     item.length > 3;
// })

// console.log(newArray);

/* using filter */

// const newArray = myArray.filter((items)=>(items.length>3));
// console.log(newArray);

//o/p :- [ 'java', 'python' ]

/* if we want to do same using forEach 
    store the values in an array
*/

// const newArr = []
// myArray.forEach((items)=>{
//     if(items.length > 3){
//         newArr.push(items);
//     }
// })

// console.log(newArr);
//o/p :- [ 'java', 'python' ]
// while loop should ideally be used when number of iterations is unknown and there is some exit condition

// syntax

// declartion of index for iteration(optional)
// let index = 0;
// // while with condition (optional)
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     // increment of index(optional)
//     index = index+1; 
// }

/*while loop for arrays */

// const myArray = ["thor", "batman", "superman"]

// let index1 = 0;

// while(index1 < myArray.length){
//     console.log(`${myArray[index1]}`)
//     index1 = index1+1;
// }

/*----do while loop----*/

// do while loop is exit controlled loop
// i.e loop will iterate at least once whether or not condition is true

let dIndex = 12;
do{
    console.log(`dIndex value is ${dIndex}`);
    dIndex = dIndex+1
}while (dIndex < 11);
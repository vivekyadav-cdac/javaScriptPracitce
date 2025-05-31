// for loop is same as in any other language like java cpp

//Basic syntax:
// this loop prints number from 0 to 10
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// loop inside loop(nested loops)
// for(let i= 0; i <= 10; i++){
//     console.log(`outer loop value of i : ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`inner loop value of j : ${j} and value of i : ${i} `)
//     }
// }

// for loop for Arrays

// const myArray = ["batman","thor","star lord"]

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
    
// }

/* break */

// for (let i = 1; i <=10; i++) {
    
//     if(i===5){
//         console.log(`Value 5 is detected`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
    
// }

/*continue*/

for (let i =1; i <=10; i++) {
    
    if(i===5){
        console.log('value 5 is detected');
        continue
        
    }
    console.log(`value of i is ${i}`);
    
}
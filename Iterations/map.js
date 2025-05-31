// as forEach doesn't return anything and filter returns value based on a condition 
// to overcome this limitations we can use map() function associated with arrays

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map((num)=> num+1);
// console.log(newNums);

// chaining of the functions
// we can use map() and filter() functions one after other in the form of chain

const newNums1 = myNumbers
                .map((num)=> num*10 )
                .map( (num)=>num+1 )
                .filter( (num)=> num > 40);
console.log(newNums1);

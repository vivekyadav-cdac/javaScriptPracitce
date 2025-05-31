// some values in js are considered equivalent to true or false 
// when they are present in conditinals like :- if(conditional), while()
// for these values no comparison is needed

// Truthy values and examples

// 1.true

if (true) {
    console.log("true is a truthy value");
}

// 2. any number other than 0

if (5) {
    console.log("number other than zero are all thruthy");
}

// 3. "String" : any non-empty string

if ("0") {
    console.log("all non empty strings are truthy values");
}

// 4. Arrays : even empty array are considered as truthy []

if ([]) {
    console.log("All arrays are considered truthy values");
}

// 5. any non-zero BigInt

if (10n) {
    console.log("All non-zero BigInt are truthy");
}

// 6. Functions :- empty or non-empty

if (function () { }) {
    console.log("All functions are considered as truthy");
}
// 6.1 arrow functions
if (() => { }) {
    console.log("Even arrow functions are considered as truthy");

}
// 6.2 iife (immediately invoked function expression ) are  considered as truthy or falsy depends upon what they return 

if ((() => { })()) {
    console.log("iife returned truthy value");
} else {
    console.log("iife returned falsy value"); //iife returned falsy value
};

if ((() => { return "hello" })()) {
    console.log("iife returned truthy value");//iife return truthy value
} else {
    console.log("iife returned falsy value");
};


// falsy values and examples

// 1.false

if (false) {
    console.log("false is truthy? : No");

}
else {
    console.log("false is a falsy values");
}

// 2. number 0

if (0) {
    console.log("0 is truthy?: No");
}
else {
    console.log("zero (0) is a falsy values");
}

// 3. (-0)

if (-0) {
    console.log(" -0 is truthy? : No");
}
else {
    console.log("negative zero (-0) is a falsy values");
}

// 4. BigInt 0n

if (0n) {
    console.log("0n is truthy?: No");
}
else {
    console.log("BigInt zero (0n) is a falsy values");
}

 // 5. Empty String ""

if ("") {
    console.log(" \"\" is truthy?: No");
}
else {
    console.log(" \"\" is a falsy value");
}

 // 6. null

if (null) {
    console.log("null is truthy?: No");
}
else {
    console.log("null is a falsy values");
}

 // 6. undefined

if (undefined) {
    console.log("undefined is truthy?: No");
}
else {
    console.log("undefined is a falsy values");
}

 // 6. NaN

if (NaN) {
    console.log("NaN is truthy?: No");
}
else {
    console.log("NaN is a falsy values");
}
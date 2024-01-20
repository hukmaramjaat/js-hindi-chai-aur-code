// const userEmail = "hukm@ R@m";

// if (userEmail) {
//     console.log("it's truthy value");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){}

// how to check array is empty
const userEmail = [];

if (userEmail.length === 0) {
    console.log("array is empty")
}else{
    console.log("array have some value");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// false == 0    true
// false == ''   true
// 0 == ''       true


// Nullish Coalescing Operator(??):null

let val1;
// val1 = 5 ?? 10;
// console.log(val1);    5

// val1 = null ?? 10;
// console.log(val1);       10

// val1 = undefined ?? 10;
// console.log(val1);           10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// Array

const arr = [1,2,3,4,5];

const myHeros = ["shaktiman", "naagraj"];

const arr2 = new Array(1,2,3,4,5);
// console.log(arr[1]);

//Array Methods

arr.push(6);
arr.push(7);
arr.pop();

// arr.unshift(9);
// arr.shift();

// console.log(arr.includes(9));
// console.log(arr.indexOf(4));

// const newArr = arr.join()
// console.log(newArr);
// console.log(typeof newArr);
// console.log(arr);

//Slice and Splice
const myArr = [0,1,2,3,4,5]

console.log("A", myArr);     // A [1,2,3,4,5]
const myn1 = myArr.slice(1,3);

console.log(myn1);          //[1,2]
console.log("B", myArr);      // B [1,2,3,4,5]


const myn2 = myArr.splice(1,3); //menuplate orginal array
console.log("c", myArr);
console.log(myn2);
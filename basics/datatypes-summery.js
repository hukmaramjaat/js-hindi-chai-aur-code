// primitive

// 7 types: string, Number, Boolearn, null , undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('124')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 2342424242n

// Reference (Non primitive)

// Array, Object, Functions

const heros = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);



// =========================================================

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "ProhulkGaming"

let anothername = myYoutubename
anothername = "Procoder"

console.log(myYoutubename);
console.log(anothername);


// Heap (Non-Primitive)

let userOne = {
    email: "prohulk@gmail.com",
    upiId: "prohulk@ybl"
}

let userTwo = userOne
userTwo.email = "hukma@gmail.com"

console.log(userOne);
console.log(userTwo);
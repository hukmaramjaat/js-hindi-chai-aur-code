// singleton

//object literals

const mysym = Symbol("key1");

const JsUser = {
    name: "Hukma",
    "full name": "Hukma Ram Choudhary",
    [mysym]: "mykey1",                  // symbol add in object 
    age: 24,
    location: "jaipur",
    email: "hukmaram@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);           // best practice for print
// console.log(JsUser[mysym]);

JsUser.email = "jaathr@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "wdevelopemnt@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello js User, ${this.name}`);
}

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

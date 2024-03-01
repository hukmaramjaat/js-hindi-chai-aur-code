let myName = "hukma    ";   //i need true length

// console.log(myName.length);

let myHero = ["Hanuman", "Sktiman"];

let heroPower = {
    Hanuman : "Bhakti",
    Sktiman : "Kundlini",

    getSktimanPower: function(){
        console.log(`Sktiman Power is ${this.Sktiman}`);
    }
}

Object.prototype.Hukma = function(){
    console.log(`hukma is present in this function`)
}

// heroPower.Hukma();

// inheritance

const User = {
    name: "chai",
    email: "chaiemail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode       ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"hukma    ".trueLength()
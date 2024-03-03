const discr = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(discr);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvaiable: true,

    orderChai: function(){
        console.log("chai nhi bani")
    }
}


Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`)
    }
}
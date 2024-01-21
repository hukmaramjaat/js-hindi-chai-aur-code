//  for of

// [{}, {}, {}]

// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num)
// }

const greeting = "helloworld!";

for (const greet of greeting) {
    console.log(greet);
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set("USA", "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// const map = new Map();
// map.set('Jp', "jaiput");
// console.log(map);

// for (const iterator of map) {
//     console.log(iterator);
// }

// for (const [key, value] of map) {
    // console.log(key, ":->", value);
// }

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    'game3': 'BGMI LIGHT'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value)
// }  not iterable for object
const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman","Flash", "Batman"];

// marvel_heros.push(dc_heros);     //affect exiting array

// console.log(marvel_heros);
// console.log(marvel_heros[3][0])

// const assambleHeros = marvel_heros.concat(dc_heros);           //not effect exiting array give new array
// console.log(assambleHeros);        

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = another_array.flat(Infinity);
// const real_another_array2 = another_array.flat(1);
// const real_another_array3 = another_array.flat(2);

// console.log(real_another_array2);

console.log(Array.isArray("hukma"));
console.log(Array.from("hukma"));
console.log(Array.from({name: "hukma"}))            //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
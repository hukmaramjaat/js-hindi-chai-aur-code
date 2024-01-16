const name = "hukma"
const repoCount = 5

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hukmapro');
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherSting = gameName.slice(0,4)
console.log(anotherSting);

const newStringOne = "   hukma  ";
console.log(newStringOne);
console.log(newString.trim());

const url = "https://hukmaram.com/hukma%45choudhary"
console.log(url.replace("%45", "95%"));

console.log(url.split("/"));
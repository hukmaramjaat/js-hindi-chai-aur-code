// Dates

let myDate = new Date();
// console.log(myDate.toString());           //Wed Jan 17 2024 09:18:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());       //Wed Jan 17 2024
// console.log(myDate.toISOString());        //2024-01-17T09:19:14.803Z
// console.log(myDate.toJSON());             //2024-01-17T09:20:11.852Z
// console.log(myDate.toTimeString())          //09:20:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleTimeString())       //9:22:18 AM
// console.log(typeof myDate);                       //object
// let myCreatedDate = new Date(2024, 0, 17);
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toDateString())
let myCreatedDate = new Date(2024, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleTimeString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

let twodata =  newDate.toLocaleDateString('default',{
    weekday: "long"
});

console.log(twodata);


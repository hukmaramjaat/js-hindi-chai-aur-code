// if
// const isUserloggedIn = true;

// if (3 != 2) {
    //     console.log("its run")
    // }
    
    // const temperature = 41;
// if (temperature < 50) {
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50")
// }

// const score = 200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const isUserloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const loggedInFromGustUser = true;

if (isUserloggedIn && debitCard ) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || loggedInFromGustUser) {
    console.log("User logged in");
}
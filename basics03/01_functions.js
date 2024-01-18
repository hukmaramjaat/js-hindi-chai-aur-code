// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("hukma");
    // return result
    // return number1 + number2
    // console.log("hukma");           // unrechable code

}

// const result = addTwoNumbers(3,5);

// console.log("Result: ", result);        // undefined

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please Eter a username");
        return
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessage("hukma ram"))
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500));


const user = {
     username: "hukma",
     price: 1999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} add price is ${anyobject.price} for one hours work on code`)
}

// handleObject(user);

// handleObject({
//     username:"sam",
//     price: 399
// });

const myNewArray = [200,300,400,500];

function retureSecondvalue(getArray){
    return getArray[1]
}

// console.log(retureSecondvalue(myNewArray));
console.log(retureSecondvalue([200,300,400,500]));
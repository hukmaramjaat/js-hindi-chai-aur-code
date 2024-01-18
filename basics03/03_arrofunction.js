const user = {
    username: "hukma Ram",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage();
// user.username = "sunil";
// user.welcomeMessage();

// console.log(this)

// function chai(){
//     let username = "hukma ram"
//     // console.log(this);
//     console.log(this.username)
// }
// chai()

const chai = () =>{
    let username = "hukma ram";
    console.log(this.username)
}
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username: "hukma ram"})
console.log(addTwo(3,4))
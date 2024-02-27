const user = {
    username: "hukma ram",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database")
        // console.log(this);
        console.log(`Username: ${this.username}`)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise();
// const date = new Date();
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Hukma", 12, true);
const useTwo = new User("Ram", 3, true);

console.log(userOne.constructor);
console.log(useTwo);
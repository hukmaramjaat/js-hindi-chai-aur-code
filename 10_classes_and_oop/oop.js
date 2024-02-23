const user = {
    username: "hukma ram",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
    }
}

console.log(user.username);
console.log(user.getUserDetails());
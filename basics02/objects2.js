// const tinderUser = new Object();  //singleton obj
const tinderUser = {}           // non-singleton obj


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hukma",
            lastname: "Ram"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const newobj = { obj1, obj2}
// console.log(newobj);
// const newobj = Object.assign({}, obj1, obj2, obj3);
// console.log(newobj);

const newobj = {...obj1, ...obj2}
// console.log(newobj);

const users = [
    {
        id: 123433,
        name: "schoudhary",
        email: "schoudhary@gmail.com"
    },
    {
        id: 123434,
        name: "achoudhary",
        email: "achoudhary@gmail.com"
    },
    {
        id: 123435,
        name: "sochoudhary",
        email: "sochoudhary@gmail.com"
    }
]

// console.log(users[0].email)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    coursename: "js in hindi",
    price: "1999",
    courseInstructor: "hukma"
}

// console.log(course.courseInstructor)

// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);


//                                  CREATING A SINGLE OBJECT

//const tinderUser = new object ()                 // this is a singleton object
const tinderUser = {}                               // this is a non-singelton object

tinderUser.id = "123User"
tinderUser.name = "sammy"
tinderUser.age = 20
tinderUser.isLoggedIn = false


//console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//                                  OBJECT IN OBJECT (NESTING)

const regularUser = {
    email : "sammy@gmail.com",
    fullname: {
        userFullName:{
            firstname : "sammay",
            lastname : "ahuja"
        }
    }
}

//console.log(regularUser.fullname.userFullName);


//                                    MERGING OBJECTS

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = Object.assign({}, obj1, obj2)           // one way
const obj3 = {...obj1,...obj2}                         // another way
//console.log(obj3);


//                                     OBJECT DESTRUCTURE

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Hitesh sir"
}
const {courseInstructor, courseName} = course
console.log(courseInstructor);
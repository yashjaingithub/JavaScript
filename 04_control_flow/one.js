// const temperature= 41
// if(temperature === 41){
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50");
// }



// const score = 100
// if(score>100){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// const score = 200
// if(score>100){                           //ONE WAY
//     let power = "fly";
//     console.log(`user power : ${power}`);
// }

// const digit = 1000                       //THIS IS IMPLICIT WAY
// if (digit > 500)   console.log("digit count");

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitcard & 2 == 2) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user is logged in");
}

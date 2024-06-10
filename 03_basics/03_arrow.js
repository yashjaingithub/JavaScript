const user ={
    userName : "Yash",
    age : 21,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to the website and your provided age is ${this.age}`);
        console.log(this);   // it gives the function description
    }
}
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
// console.log(this);            // it shows empty


// function chai (){
//     console.log(this);
// }
// chai()



// const chai = function(){
//     let userName = "Yash"
//     console.log(this.userName);
// }
// chai()

const chai = () => {                     //this is arrow function
    let userName = "Yash"
    console.log(this.userName);
}
chai()

// const addtwo = (num1, num2) => {     //this is basic arrow function
//     return num1 + num2
// }


const addtwo = (num1, num2) =>  num1 + num2    //implicit return.    or
const addthree = (num1, num2) => (num1 + num2)
const addfour = (num1, num2) => ({userName:"Yash"})     //returning the object using arrow function
console.log(addtwo(3,4));
console.log(addthree(4,5));
console.log(addfour());
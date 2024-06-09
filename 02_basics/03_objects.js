//singeleton 
//object literals
// Object.create  -> constructor method


const mysym = "mykey1"       // here i created a symbol



const jsuser = {
    name : "Yash",
    "full name ": "Yash Jain",
    [mysym]: "mykey1",    // symbol will be printed like this 
    email : "yashjain.google.com",
    age : 21,
    location : "Mumbai",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]

}
console.log(typeof jsuser);
console.log(jsuser.email);  // this method is okay but not best method
console.log(jsuser["email"]);  // this is the best/optimal method  
console.log(jsuser["full name "]);
console.log(jsuser[mysym]);


jsuser.email = "yashjain.amazon.com"  // here i overwrite the previously declared email
console.log(jsuser["email"]);
// Object.freeze(jsuser);             // this is how we can freeze an object


jsuser.greeting = function(){
    console.log("Hello js user");
}

jsuser.greetingTwo = function () {
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
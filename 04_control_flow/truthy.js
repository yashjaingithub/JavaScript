const userEmail = "yash@gmail.com"
if(userEmail) {
    console.log("Email found");
}
else{
    console.log("Email not found");
}


//FALSY VALUES => nul, undefined, false, 0, -0, Bigint, 0n, NaN

//TRUTHY VALUES => "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj= {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


//                               ++++++ NULLISH COALESCING OPERATOR (??) ++++++.    sari kahani "null" or "undefined" pr hi hai

let val1;
val1 = 5??10;
val1 = null??10;
val1 = undefined??15;
val1 = null??10??20;

console.log(val1);


//                              ++++++++ TERNIARY OPERATOR ++++++++
// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


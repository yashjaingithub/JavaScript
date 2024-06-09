//                                      FUNCTIONS
function sayMyname(){
    console.log("yash");
    console.log("yash");
    console.log("yash");
    console.log("yash");

}
//sayMyname() //reference and execution

//function addTwoNum(number1, number2){
    //console.log(number1 + number2);
//}
// addTwoNum(2,2)




function addTwoNum(number1, number2){
    let result = number1 + number2
    return result
} 
const result = addTwoNum(2,3)
//console.log("result : ",result);


    
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Yash")); 



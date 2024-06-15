//REDUCE METHOD


//*********** Normal reduce method used in making cart services ****************
// const myNums = [1,2,3]
// const myNewNum = myNums.reduce(function (accumulator, currentvalue){ 
//     console.log(`acc: ${accumulator}, curval: ${currentvalue}`);
//     return accumulator + currentvalue
// },0)
// console.log(myNewNum);


//************ Implementing reduce method using 'arrow function' ******************
// const myNums = [1,2,3]
// const newNums = myNums.reduce((acc, currVal) => {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal
// },0 )                                                       //0 here used is initializer
// console.log(newNums);

//**************** OR **************** */       
const myNums = [1,2,3]                                      //this is simple method (not complex or detailed)
const newNums = myNums.reduce((acc, currVal) => {
    return acc + currVal
},0 )                                                          
console.log(newNums);



const shoppingCart = [
    {
        itemName: "jscourse",
        price : 2999

    },
    {
        itemName: "js course",
        price : 2999

    },
    {
        itemName: "py course",
        price : 999

    },
    {
        itemName: "cpp course",
        price : 1999

    },
    {
        itemName: "data science course",
        price : 12999

    },
    {
        itemName: "mobile dev course",
        price : 5999

    },
]
const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
},0)
console.log(priceToPay);
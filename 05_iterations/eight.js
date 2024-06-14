//REDUCE METHOD

const myNums = [1,2,3]
const myNewNum = myNums.reduce(function (accumulator, currentvalue){ return accumulator + currentvalue},0)
console.log(myNewNum);
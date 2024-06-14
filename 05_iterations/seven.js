const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNumbers.map((nums) => {return nums +10})
console.log(newNum);


//CHAINING THE METHODS
const mynum = [1,2,3,4,5,6,7,8,9,10]
const myNewNum = mynum.map((num) => {return num * 10})
                      .map((num) => num+1)
                      .map((num) => num /2)   
                      .filter((num) => num>10)
console.log(myNewNum);
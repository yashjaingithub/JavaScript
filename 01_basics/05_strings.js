const name = "Yash"
const repoCount = 50

console.log(name + repoCount +"value");

console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Yash")
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('s'));



const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringone = "                 Yash Jain"
console.log(newStringone)
console.log(newStringone.trim());


const url = "https://yashjain.com/yash%20jain"
console.log(url.replace('%20','superstar'));
console.log(url.includes('.com'));  // to find somthing in string 
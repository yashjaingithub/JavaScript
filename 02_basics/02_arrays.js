const marvel_heroes = ["Thor", "Ironman", "SpiderMan"]
const dc_heroes = ["SuperMan", "Flash", "BatMan" ]

const all_heroes = marvel_heroes.concat(dc_heroes) // this is one one
//console.log(all_heroes);

const all_heroes_new = [...marvel_heroes,...dc_heroes]  // this is another and better way
//console.log(all_heroes1);


const another_array = [1,2,3,[4,5,6],7,[8,9,[10]]]
const another_array_new = another_array.flat(Infinity)
//console.log(another_array_new);

// console.log(Array.isArray("Yash"));
// console.log(Array.from("Yash"));
// console.log(Array.from({name: "Yash"})); // interesting case


let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3 ));
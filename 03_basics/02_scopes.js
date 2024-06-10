//the entire story of scope start with 3 keywords -> let, var and const

// var c = 300
let a = 300
if (true) {
    let a = 10
    const b =20 
    //console.log("inner : ", a);
    //console.log("inner : ", b);
}
// console.log(a);

//                                              NESTED SCOPE
function one() {
    const username = "Yash"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    //console.log(website);
    two()
}
//one()

if (true) {
    const username = "Yash"

    if (username === "Yash"){
        const website = " youTube"
        console.log(username + website);
    }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++++++++
addOne(5)
function addOne(num){
    return num + 1
}


const addTwo = function (num){
    return num +2
}
addTwo(5)
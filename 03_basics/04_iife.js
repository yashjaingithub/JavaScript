//                          IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//global scope k pollution se problem hoti hai kai baar to jo us global scope k variables hai or jo
// bhi declarations hai uske pollution ko hatane k liye umne iife use kiya

// (function declared in this) (execution happens here)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();

(() => {     //using arrow function
    console.log(`DB CONNECTED TWO`);
})();

((name) => {     
    //un-named iife
    console.log(`DB CONNECTED TWO ${name}`);
})("Yash");

//FOR EACH LOOP
const coding = ["js", "rb", "cpp", "swift", "java", "py"]

coding.forEach (function(val){
    //console.log(val);
})

coding.forEach((val) => {              /// printing using arrow function 
    //console.log(val);
})

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})



const languages  = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]
languages.forEach((item) => {
    console.log(item.languageName);
})
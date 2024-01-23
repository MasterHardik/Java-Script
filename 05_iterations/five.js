const coding = ['js','ruby', 'js','java' ,'cpp','py']

// coding.forEach((items , index , arr)=>{
//     console.log(`Items = ${items} : Index  = ${index} : Arr =  ${arr}`);
//     // console.log((typeof arr))
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
    {
        languageName : "javascript",
        languageFile:"js"
    },
    {
        languageName : "java",
        languageFile:"java"
    },
    {
        languageName : "python",
        languageFile:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(`Language name  : ${item.languageName} and language file : ${item.languageFile}`);
})
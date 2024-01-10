// global scope
var c = 300


let a = 300
if(true){

    // Block scope 
    let a = 10
    const b = 20
    // c = 30
    var c = 30
    console.log("Inner: ",a);
}

console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username = "Hardik"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()



if(true){
    const username = "Master"
    if(username==="Master"){
        const website = ' Youtube'
        console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

// ******** intersting ++++++++++++

addOne(5)///dont give eror
function addOne(num){
    return num+1;
}

addOne(5)

//expressions

// addTwo(5) // gives error because of hositing because we are holding that function : Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}

addTwo(5)

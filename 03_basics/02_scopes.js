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
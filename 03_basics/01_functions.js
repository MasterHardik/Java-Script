function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("D");
    console.log("I");
    console.log("K");
}

sayMyName()

function addTwoNumbers(number1,number2) {//parameters
    number1+number2
    console.log(number1+number2);
}

addTwoNumbers() //NaN
addTwoNumbers(3,4) //arguments
addTwoNumbers(3,"4") 
addTwoNumbers(3,"a") 
addTwoNumbers(3,null) 
addTwoNumbers(3,undefined) //NaN

const result = addTwoNumbers(3,5)
// console.log("Result: ",result);//undefined since function doesn't return anything

function addNumber(num1,num2){
    return num1+num2;
    // let result = num1+num2
    // return result;
    console.log("Hardik");
}

let res = addNumber(7,9);
// console.log("Result: ",res);


// function loginUserMesasge(username){
function loginUserMesasge(username="!!default value!!"){
    // if(username==undefined){
    if(!username){
        console.log('Please enter a value!!');
        return
    }
    return `${username} just logged in`
   
}

// console.log(loginUserMesasge('Hardik'))
console.log(loginUserMesasge())


function calculateCartPrice(...num1){
    return num1.reduce((accumulator,currvalue)=>{
        return currvalue+currvalue;
    },0)
}

console.log(calculateCartPrice(2,5,6));

const user={
    username:"hardik",
    price:99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"same",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([6,8,2]));
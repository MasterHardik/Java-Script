// Primitive 

// 7 types  :String,Number,Boolean,null,undefined,BigInt,symbol(kisi ko unique bnane k lie use hota h )


// Q. is JS Dynamically typed or statically typed 
// Ans its dynamicalyl typed e.g. const score =100 or const scoreValue = 100.3 or const isLoggedIn =false; or const outsideTemp =null

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

// const bigNumber = 423423423425654673524
// const bigNumber = 423423423425654673524n // n makes it bigint



// Reference type ( Non Primitive)

// Array, Objects, Funcitons

const heros = ["shaktiman" ,"nagraj", "doga"]

let myObj ={
    name:"Hardik",
    age:22
}

const myFunction = function(){
    console.log("hello from function");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++
// Stack(primitive), Heap(Non-Primitive)

let myyoutubename = "MasterHardik"

let anothername =myyoutubename
anothername = "Hardik Chouhan"

console.log(myyoutubename);
console.log(anothername);


let user1={
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = user1;

user2.email = "sample@gmail.com";//since reference ahnce changes in user1 also so be careful using non-premitive data types

console.log(user1)
console.log(user2)

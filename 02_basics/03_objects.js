// Singleton
// Object.create //another way 

// object literas
const mySym = Symbol("key1")

const jsUser = {
    name:"Hardik", // by default "name" <-- string form me leta h system
    age:18,
    "full name":"Haridk Chouhan",
    [mySym] :"myKey1", //we have to put in square bracket for symbols
    location:"Khargone",
    email:"hardik@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}


console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
// console.log(jsUser.full name); // so fir this issue we need the suare bracket access way
// console.log(typeof jsUser.mySym); //"string" so to use like a symbol then we have to write the key in square bracket as shown above
console.log(jsUser[mySym]); //"symbol" so to use like a symbol then we have to write the key in square bracket as shown above

// on output symbol in obj gives as  ->  [Symbol(key1)]: 'myKey1'


// jsUser.email ="hardik@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email ="hardik@microsoft.com"
// console.log(jsUser)


jsUser.greeting =function () {
    console.log("Hello Js user");
}

jsUser.greetingTwo =function () {
    console.log(`Hello JS user  ,${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());
console.log(jsUser)


// Literals ki trah declare krne pr singleton nhi bnta : constructor se singleton bnta h 
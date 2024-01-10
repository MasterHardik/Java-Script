const user = {
    username : "Hardik",
    price:999,
    welcomeMessage:function(){
        let that = this;//but as an alternative to this we use arrow function
        console.log(this);
        function g(){
            console.log(`${that.username}, welcome to website form function g()`);
            // console.log(this);
        }
        console.log(`${this.username}, welcome to website`);
        g()
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);//empty object {}
// function chai()
// {   let username = 'Master'
//     console.log(this.username);//undefined
//     // console.log(this);
// }
// chai()


// let chai = function()
// {   
//     let username = 'Master'
//     console.log(this.username);//undefined
// }
// chai()

// **arrow functions**
// let chai = ()=>
// {   
//     let username = 'Master'
//     console.log(this.username);//undefined
//     console.log(this);//{}
// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// implicit return 
// const addTwo = (num1,num2)=>num1+num2

// const addTwo = (num1,num2)=>(num1+num2)

// const addTwo = (num1,num2)=>{username:"hardik"} //undefined
const addTwo = (num1,num2)=>({username:"hardik"})

console.log(addTwo(4,8));

// myArray.forEach(()=>())



// if

// const isUserloggedIn = true
// const temperature = 41

// if(temperature<50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50")
// }


// if(isUserloggedIn){

//  }

//  if(2=='2'){
//     console.log('Executed ==');
//  }

//  if(2==='2'){
//     console.log('Executed ==');
//  }



//  < , > , <= , >= , == , === (also checks type), != 


// const score = 200
// if(score>100){
//     const power ='fly'
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); //power outof scope : but if its defined as var then issue


// const balance = 1000

// // if(balance>500)console.log("test"),console.log("test2"); // but immature not good good , bad practice

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log();
// }


const userLoggedIn = true
const debitCard =true
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to but course");
}

if(loggedInFromGoogle||loggedInFromEmail)
{
    console.log("USer logged in");
}


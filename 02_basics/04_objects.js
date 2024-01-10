// const tinderUser = new Object()  //This is singleton object
const tinderUser ={}  //this is not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn  = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"hardik",
            lastname:"Chouhan"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname);

 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"c",4:"d"}
 const obj4 = {5:"e",6:"f"}


//  const obj3 = {obj1,obj2}
//  const obj3 = {...obj1,...obj2}
 
// const obj3 = Object.assign(obj1,obj2);
const obj3 = Object.assign({},obj1,obj2,obj4); // This empty parameter is optional (target,source)
 
//  console.log(obj3);


 const users=[
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:2,
        email:"h@gamil.com"
    },
    {
        id:3,
        email:"h@gamil.com"
    }

]

 console.log((users[1].email))

 console.log(tinderUser);

 console.log(Object.keys(tinderUser)); // array datatye
 console.log(Object.values(tinderUser)); // array datatye
 console.log(Object.entries(tinderUser)); // array of aray datatye

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 console.log(tinderUser.hasOwnProperty('isLogged'));


 const course ={
    course:"js in hindi",
    price:"999",
    courseInstructor:"Master"
 }
 

//  course.courseInstructor

const {courseInstructor:Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);



// **in react props se is trh destructuring kiya jata h 
// const navbar=({company})=>{

// }


// navbar(company = "Hardik")
// ***

// **JSON**
// {
//     "name": "Hardik",
//     // coursename : "js in hindi", give erro coz key in quotes
//     "price":"free"
// }


[
    {},
    {},
    {}
]
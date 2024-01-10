// arbitrary date January 1, 1970, UTC

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate  =new Date(2023 , 0, 23,5,3)
console.log(myCreatedDate.toLocaleString());


// let myCreatedDate2  =new Date("2023-01-14")
let myCreatedDate2  =new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());

console.log(Math.floor(Date.now()/1000)); // converts in small value sec to compare easily

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());


newDate.toLocaleDateString(
    'default',{
        weekday:"long",
    }
)
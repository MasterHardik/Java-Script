// const coding = ['js','ruby', 'js','java' ,'cpp','py']


// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item // still undefined
// })

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const filteredValues1 = myNums.filter((items)=>items>2)

// const filteredValues2 = myNums.filter((items)=>{
//    return items>2
// })
// console.log(filteredValues1);
// console.log(filteredValues2); // agr {} lga kr scope open krte h to return krna pdega 

// const newNums  = []

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);


const books = [
    {
        title:'Book One', genre:'Fiction',publish:1981,edition: 2004
    },
    {
        title:'Book Two', genre:'Non-Fiction',publish:1999,edition: 2005
    },
    {
        title:'Book Three', genre:'Science',publish:2002,edition: 2006
    },
    {
        title:'Book Four', genre:'History',publish:2004,edition: 2007
    },
    {
        title:'Book Five', genre:'Fiction',publish:1981,edition: 2008
    },
]

let userBooks  = books.filter((bk)=>bk.genre=='History')
console.log(userBooks);

userBooks = books.filter((bk)=>{
    return bk.publish>=2000
})
console.log(userBooks);

userBooks = books.filter((bk)=>{
    return bk.publish>=2000 && bk.genre == 'History'
})
console.log(userBooks);

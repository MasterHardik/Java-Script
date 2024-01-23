// reduce((accumulator)=>{})

const myNums = [1,2,3]

// const myTotal  = myNums.reduce((accumulator ,currVal)=>{
//     console.log(`ac : ${accumulator} and currval : ${currVal}`);
//     return accumulator + currVal
// },0)
// // },3)

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);


const shoppingCart =[
    {
        itemName : "js Course",
        price:2999
    },
    {
        itemName : "py Course",
        price:999
    },
    {
        itemName : "mobile courses",
        price:5999
    },
    {
        itemName : "Data science Course",
        price:12999
    },
]


// task : add al the pices in the cart

// const CardTotal = shoppingCart.map((item)=>item.price).reduce((acc,curr)=> acc+curr,0)
// console.log(CardTotal);

const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// /for Each doesn't return but map return otherewise both are same 
const newNums = myNumbers.map((nums)=>nums+10)
console.log(newNums);

// Chaining :// here before returning the value to upper function it is first passed to the chained function
const newNums2 = myNumbers
    .map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=>num>=40)


    
console.log(newNums2);
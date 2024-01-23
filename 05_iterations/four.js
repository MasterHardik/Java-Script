const myObject ={
    js :'javascript',
    cpp : 'C++',
    rb:"ruby",
    swift : "swift by apple"
}
for (const key in myObject) {
    console.log(key,' : ' ,myObject[key]);
}


const programming  = ['js' , 'rb', 'cpp','py', 'java']

for (const key in programming) {
    console.log(key); // in aray gives the index
    console.log(programming[key]);
}

const map = new Map()

map.set('IN' ,"India")
map.set('USA' ,"United States of America")
map.set('Fr' ,"France")
map.set('IN' ,"India")

for (const key in map) {
    console.log(key); //since maps are not iterable hence no output
}
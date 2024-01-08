const name = 'Hardik'
const Lastname = "Chouhan" //both are same

console.log(name + Lastname+"Value");//bt not good way

// better use backTicks comes in string interpolation

console.log(`Hello my name is ${name} and my lastname is ${Lastname}`);


const getName = new String('Mas-ter')//this gives us many methods

console.log(getName[0]);
console.log(getName.__proto__);// {} gives object having methods
console.log(getName.length);
console.log(getName.toUpperCase());
console.log(getName.charAt(2));
console.log(getName.indexOf('t'));

const newString = getName.substring(0,4)
console.log(newString);

const anotherString = getName.slice(-8,4)
console.log(anotherString);

const newStringOne = '        HArdik       '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hardikchoun%20chouhan"


console.log(url.replace('%20','-'));
console.log(url.includes('har'))

console.log(getName.split('-'))



(function chai(){
    console.log(`DB Connected`);
})(); //<--semicolon is must other weise next will not execute

// Global scop-e k variables se pollution hota h so to remove it we use this 
// ()() //: First funciton declaration k lie second uske execution k lie 

(aurcode =()=>{
    //named IIFE
console.log(`DB Connected 2`);
})();


((name)=>{
    console.log(`DB Connected three ${name}`);
})('Master')
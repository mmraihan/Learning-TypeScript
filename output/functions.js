"use strict";
//Approach 1-Vanila JS (Type is not defined here)
const myFunc = () => {
    console.log("hello");
};
//Approach 2- Strong Type- No parameter
let myFunnc2; //Function Declaration
myFunnc2 = () => {
    console.log("Hello I'm from TS ");
};
myFunnc2();
//Approach 2- Strong Type- with parameter
const myFunc3 = (a, b) => {
    console.log(`Hello ${a}, Give me ${b} dollars`);
};
myFunc3('Raihan', 100);
//Approach 2- Strong Type-  optional with parameter
const myFunc4 = (a, b, c) => {
    console.log(`Hello ${a}, Give me ${b} dollars`);
};
myFunc4("Raihan2", 1000);
//void vs undefined = nothing vs its a  value but not defined
//Approach 2- Strong Type-  with Default Value
const myFunc5 = (a, b, c = 99) => {
    console.log(`Hello ${a}, Give me ${b} dollars or ${c}`);
};
myFunc5("Raihan2", 1000);
//Approach 2- Strong Type-  with Return value
const myFunc6 = (a, b, c = 99) => {
    console.log(`Hello ${a}, Give me ${b} dollars or ${c}`);
};
myFunc5("Raihan2", 1000);

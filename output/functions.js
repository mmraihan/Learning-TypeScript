"use strict";
//Approach 1-Vanila JS (Type is not defined here)
var myFunc = function () {
    console.log("hello");
};
//Approach 2- Strong Type- No parameter
var myFunnc2; //Function Declaration
myFunnc2 = function () {
    console.log("Hello I'm from TS ");
};
myFunnc2();
//Approach 2- Strong Type- with parameter
var myFunc3 = function (a, b) {
    console.log("Hello " + a + ", Give me " + b + " dollars");
};
myFunc3('Raihan', 100);
//Approach 2- Strong Type-  optional with parameter
var myFunc4 = function (a, b, c) {
    console.log("Hello " + a + ", Give me " + b + " dollars");
};
myFunc4("Raihan2", 1000);
//void vs undefined = nothing vs its a  value but not defined
//Approach 2- Strong Type-  with Default Value
var myFunc5 = function (a, b, c) {
    if (c === void 0) { c = 99; }
    console.log("Hello " + a + ", Give me " + b + " dollars or " + c);
};
myFunc5("Raihan2", 1000);
//Approach 2- Strong Type-  with Return value
var myFunc6 = function (a, b, c) {
    if (c === void 0) { c = 99; }
    console.log("Hello " + a + ", Give me " + b + " dollars or " + c);
};
myFunc5("Raihan2", 1000);

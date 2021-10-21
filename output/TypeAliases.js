"use strict";
var userDetails = function (id, user) {
    console.log("User id is " + id + ", Name is " + user.name + " and age is " + user.age);
};
var sayHello = function (user) {
    console.log("Hello " + (user.age > 50 ? "sir" : "Mr.") + " " + user.age);
};
var person1 = {
    name: "Raihan",
    age: 22
};
sayHello(person1);

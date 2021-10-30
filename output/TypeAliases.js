"use strict";
const userDetails = (id, user) => {
    console.log(`User id is ${id}, Name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.age}`);
};
let person1 = {
    name: "Raihan",
    age: 56
};
sayHello(person1);

"use strict";
Example: 1;
let add; // It provides nethod's guidline
add = (a, b) => {
    return (a + b);
};
console.log(add(5, 5));
//Example: 2
let calculation;
calculation = (a, b, c) => {
    if (c == 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(10, 20, 'add'));

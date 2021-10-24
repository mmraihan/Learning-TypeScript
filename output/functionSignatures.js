"use strict";
Example: 1;
var add; // It provides nethod's guidline
add = function (a, b) {
    return (a + b);
};
console.log(add(5, 5));
//Example: 2
var calculation;
calculation = function (a, b, c) {
    if (c == 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(10, 20, 'add'));

"use strict";
/* class Player2{
    name: string;
    private age: number;
    readonly country: string;

    constructor(n:string, a: number, c: string) {
       this.name=n;
       this.age=a;
       this.country=c;
        
    } */
// When we use access modifier and explicitely say the we can write
var Player2 = /** @class */ (function () {
    function Player2(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player2.prototype.plays = function () {
        console.log(this.name + " from " + this.country + " is playnig ");
    };
    return Player2;
}());
var mashrafi2 = new Player2('Mashrafi', 40, 'Bangladesh');
var sakib2 = new Player2('sakib', 38, 'Bangladesh');
console.log(sakib2.country);
console.log(mashrafi2.country);
var players2 = [];
players2.push(sakib2);
players2.push(mashrafi2);
players2.forEach(function (element) {
    console.log(element.name);
});

"use strict";
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.country + " is ");
    };
    return Player;
}());
var mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
var sakib = new Player('sakib', 38, 'Bangladesh');
mashrafi.play();
sakib.play();
console.log(mashrafi.country);
var players = [];
players.push(sakib);
players.push(mashrafi);
players.forEach(function (element) {
    console.log(element.name);
});

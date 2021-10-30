"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is `);
    }
}
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('sakib', 38, 'Bangladesh');
mashrafi.play();
sakib.play();
console.log(mashrafi.country);
const players = [];
players.push(sakib);
players.push(mashrafi);
players.forEach(element => {
    console.log(element.name);
});

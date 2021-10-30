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


import {Player3} from './Classes/Player.js'
const mashrafi3 = new Player3('Mashrafi3', 40,'Bangladesh' );
const sakib3 = new Player3('sakib3', 38,'Bangladesh' );
console.log(sakib3.country)


console.log(mashrafi3.country);
const players3: Player3[]=[];
players3.push(sakib3);
players3.push(mashrafi3);

players3.forEach(element => {
console.log(element.name)
});

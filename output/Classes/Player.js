//Older browser can not support this module 
export class Player3 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    plays() {
        console.log(`${this.name} from ${this.country} is playnig `);
    }
}

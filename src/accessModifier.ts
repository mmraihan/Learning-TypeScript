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
    class Player2{
       
        constructor(
        private name: string,
        public age: number,
        readonly country: string,
        ) 
        {}

            
        

    plays(){
        console.log(`${this.name} from ${this.country} is playnig `)
    }
    
}

const mashrafi2 = new Player2('Mashrafi', 40,'Bangladesh' );
const sakib2 = new Player2('sakib', 38,'Bangladesh' );
console.log(sakib2.country)


console.log(mashrafi2.country);
const players2: Player2[]=[];
players2.push(sakib2);
players2.push(mashrafi2);

players2.forEach(element => {
console.log(element.name)
});

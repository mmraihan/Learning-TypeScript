/* let a: string;
let b:number;

a= "Raihan"
b=3;

 */
//Array

/* let a:string[]=[];
a.push('Raihan');


let b: (string | number)[]=[];
b.push("oooo",4) */

//Object
/* 
let c:{
    name: string,
    age: number,
    adult: boolean
};
c={
    name: "Raihan",
    age:24,
    adult:false
}
console.log(c);
 */

let myFunc: Function;
myFunc=( a: string, b:string, c?:string)=>{
    console.log(`Hello ${a}, $(b)`);
}

myFunc('An', 'bb','c');
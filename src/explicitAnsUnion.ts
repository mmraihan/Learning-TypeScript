// ----------------------- Explicit-------------------

let a:string;
let b: number;

a="Mubasshir"
b=24;
console.log(`Hello ${a} ! I am ${b} years old`); // String Interpolation


//-------------Union in Array-------------

let c: (string | number) []=[]
c.push('Raihan');
c.push(3);


c.forEach(e => {
    console.log(e)
    
});
//-------------Union in Object-------------


let anObject : {
    name: string,
    cgpa : number,
}

anObject={
    name:"Raihan",
    cgpa:3.01,
}







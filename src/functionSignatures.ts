Example: 1

let add : (x:number, y: number)=>number; // It provides nethod's guidline

add =(a: number, b: number) =>{
return (a+b)
}

console.log(add(5,5));

//Example: 2

let calculation : (x:number, y: number, z: string)=>number;

calculation=(a:number, b: number, c: string)=>{

if (c=='add') {
    return a+b;
} else {
    return a-b;
}

}

console.log(calculation(10,20,'add'));
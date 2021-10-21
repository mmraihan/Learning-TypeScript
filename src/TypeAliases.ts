const userDetails= (
    id : string | number,
    user: {name: string, age : number}
) =>{
    console.log(`User id is ${id}, Name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: {name: string, age: number})=>{

console.log(`Hello ${user.age>50 ? "sir" : "Mr." } ${user.age}`);

};

type person = {
    name: string,
    age: number
}

let person1: person={
    name: "Raihan",
    age: 22
}

sayHello(person1)
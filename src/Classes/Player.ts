//Older browser can not support this module 
export class Player3{
       
    constructor(
    public name: string,
    public age: number,
    readonly country: string,
    ) 
    {}

        
    

plays(){
    console.log(`${this.name} from ${this.country} is playnig `)
}

}
export  class Person {
    name: string ;
  
    constructor(name:string){
     this.name = name;
    }
  
    sayHello(message: string) {
      console.log(message);
    }
  
    sayMyName(){
      console.log(`me chamo ${this.name}`);
      
    }
  }
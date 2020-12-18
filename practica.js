const factoryFunction = name => {
    const sayHello = () => `My name is ${sayGoodbye()}`;
    const sayGoodbye = () => name;
    return {sayHello, name}
};

const myFunction = {
    function: function(){return "hello"}

};

const inheritanceFunction = (name, age) => {
    const {sayHello} = factoryFunction(name);
    return {sayHello, age}
}

let person = factoryFunction('Juan');
let otherPerson = inheritanceFunction('Diego', 20);
console.log(otherPerson.sayHello());

//console.log(otherPerson.sayHello());


const Counter = () =>{
    let count = 0;
    return () =>{
        console.log(count);
        count++;
    }
}

let counting = Counter();

counting();
counting();
counting();


const proto = {
    hello () {
      return `Hello, my name is ${ this.name }`;
    }
  };
  
  const greeter = (name) => Object.assign(Object.create(proto), {
    name
  });
  
  const george = greeter('george');
  
  const msg = george.hello();
  
  console.log(msg);


 let myModule = (function(){
     
     return {
         publicMethod: function(){ 
            console.log("IIFE");
        }
    }
  })();

myModule.publicMethod();
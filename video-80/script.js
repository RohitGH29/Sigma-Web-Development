// classes & objects in JS

// Prototypal inheritance
let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
};

rabbit.__proto__ = animal;  // rabbit now inherits from animal

console.log(rabbit.eats);  // true

// Classes 
class Animal {
    constructor(name) {
        this.name = name;
        console.log("object is created...");
    }
    eats() {
        console.log("Animal eats food");
    }

    jumps() {
        console.log("Animal jumps");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("object is created & he is lion...");
    }

    eats() {
        console.log("Lion eats meat");
    }
}

let l = new Lion('Simba');
console.log(l);  // Lion { name: 'Simba' }


let a = new Animal('Hello');  // object is created...
console.log(a);  // Animal {}

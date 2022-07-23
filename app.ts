interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;
    constructor(name: string){
        this.name = name;
    }

    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Nisa');
user1.greet('Hi there - I am');
console.log(user1);

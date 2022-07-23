interface Named {
    readonly name: string;
}

interface Greetable extends Named {
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
// user1.name = 'Sara'; //because of i wrote readonly infront of name property in interface.
user1.greet('Hi there - I am');
console.log(user1);

var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 30;
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Nisa');
// user1.name = 'Sara'; //because of i wrote readonly infront of name property in interface.
user1.greet('Hi there - I am');
console.log(user1);

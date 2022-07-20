// const add = (a: number, b: number = 1) => a + b;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const printOutput: (a: string | number) => void = output => console.log(output); 
// const button = document.querySelector('button');
// if(button) //because typescript doesn't know if button already exist or not we must be check that
// {
//     button.addEventListener('click', event => console.log(event));
// }
// printOutput(add(5));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: 'Marz',
    age: 19
};
var copiedPerson = __assign({}, person);
//or we can write this like that -> ...numbers: [number, number, number] but this time we can get just three value.
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
};
var addedNumbers = add(5, 6, 7, 8, 34);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1], otherHobbies = hobbies.slice(2);
var userName = person.firstName, age = person.age;

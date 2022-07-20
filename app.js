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
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) //because typescript doesn't know if button already exist or not we must be check that
 {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    name: 'Marz',
    age: 19
};
var copiedPerson = __assign({}, person);

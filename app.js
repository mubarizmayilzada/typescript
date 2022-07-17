//we can save type safety with this way
//now we can`t pass other type to add function
function add(num1, num2) {
    return num1 + num2;
}
var number1 = 6;
var number2 = 20;
var result = add(number1, number2);
console.log(result);

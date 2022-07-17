//we can save type safety with this way
//now we can`t pass other type to add function
function add(num1: number, num2: number){
    return num1 + num2;
}

const number1 = 6;
const number2 = 20;

const result = add(number1, number2);

console.log(result);
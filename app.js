function add(num1, num2) {
    return num1 + num2;
}
;
function printResult(num) {
    return ("result" + num);
}
;
printResult(add(5, 7));
//this mean is, the variable combineValues just can be hold function which it get two parametr in number type and it mut be return  also number type value;
var combineValues;
combineValues = add;
console.log(combineValues(4, 5));

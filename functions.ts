function add(num1: number,num2: number){
    return num1 + num2;
};

function printResult(num: number){
    return ("result" + num);
};

function addAndHandler(num1: number, num2: number, cb: (num: number) => void){
    const result = num1 + num2;
    cb(result);
};

addAndHandler(10,20, (result)=>{
    console.log(result);
})

printResult(add(5,7));

//this mean is, the variable combineValues just can be hold function which it get two parametr in number type and it mut be return  also number type value;
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(4,5));
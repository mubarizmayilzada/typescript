function add(num1: number, num2: number, showResult: boolean, phares: string){
    if(showResult){
        console.log(phares + (num1 + num2));
    }
}

const number1 = 6;
const number2 = 20;
const showResult = true;
const phares = 'result is: ';

add(number1, number2,showResult,phares);

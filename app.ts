const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: string | number) => void = output => console.log(output); 

const button = document.querySelector('button');

if(button) //because typescript doesn't know if button already exist or not we must be check that
{
    button.addEventListener('click', event => console.log(event));
}

printOutput(add(5));
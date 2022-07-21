// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: string | number) => void = output => console.log(output); 

// const button = document.querySelector('button');

// if(button) //because typescript doesn't know if button already exist or not we must be check that
// {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));



const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['hiking'];

activeHobbies.push(...hobbies);


const person: {
    firstName: string,
    age: number
} = {
    firstName: 'Marz',
    age: 19
};

const copiedPerson = {...person };


//or we can write this like that -> ...numbers: [number, number, number] but this time we can get just three value.
const add = (...numbers: number[]) => {
    return  numbers.reduce((a, b) => a + b, 0);
};

const addedNumbers = add(5,6,7,8,34);

console.log(addedNumbers);


const [hobby1, hobby2, ...otherHobbies] = hobbies;

const {firstName: userName, age} = person;


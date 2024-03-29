type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface EvelatedEmployee extends Employee, Admin {}
type EvelatedEmployee = Employee & Admin;

const e1: EvelatedEmployee = {
    name: 'Marz',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
} 


const nisa = add('Marz', ' Sara');
nisa.split(' ');


const fetchedUserData = {
    name: 'marz',
    age: 19,
    job: {'title': 'Front-end engineer', 'description': 'build some sites'}
}

console.log(fetchedUserData?.job?.title);

//Nullish Coalescing mean if data is just null or undefined then execute another value. not falsy, just null or undefined.
const userInput = null;
const holdInputData = userInput ?? 'Default';


type unknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unknownEmployee){
    console.log(emp.name);
    if('startDate' in emp){
        console.log('start Date' + emp.startDate);
    }
    if('privileges' in emp){
        console.log('Privileges' + emp.privileges);
    }    
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Sara', startDate: new Date});

class Car{
    drive(){
        console.log('driving...');
    }
}


class Truck{
    drive(){
        console.log('driving a Truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo...' + amount);        
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000);
    // }
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);


interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal (animal: Animal){
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log('Moving at speed ' + speed);   
}


// const userInputElement = document.querySelector('#userInput')! as HTMLInputElement;
const userInputElement = document.querySelector('#userInput');

// userInputElement.value = 'Hi there';
if(userInputElement){
    (userInputElement as HTMLInputElement).value = 'Hi there';
}


interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email address!',
    username: 'Must start with a capital character!',
};
    
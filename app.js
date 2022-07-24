var e1 = {
    name: 'Marz',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ('startDate' in emp) {
        console.log('start Date' + emp.startDate);
    }
    if ('privileges' in emp) {
        console.log('Privileges' + emp.privileges);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Sara', startDate: new Date });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('driving a Truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000);
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
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
var userInputElement = document.querySelector('#userInput');
// userInputElement.value = 'Hi there';
if (userInputElement) {
    userInputElement.value = 'Hi there';
}
var errorBag = {
    email: 'Not a valid email address!',
    username: 'Must start with a capital character!'
};

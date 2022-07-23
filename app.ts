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
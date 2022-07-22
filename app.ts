class Department {
    // private id: string;
    // name: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
        // this.name = n;
        // this.id = id;
    };

    describe(this: Department){
        console.log(`department: (${this.id}) ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);            
    }
};


const accounting = new Department('d1','Accounting');

accounting.describe();
accounting.addEmployee('Marz');
accounting.addEmployee('Sara');
//we set private keyword to employee array for this
// accounting.employees[2] = 'Nisa';

accounting.printEmployeeInformation();

// const accountingCopy = {
//     name: 'DUMMY',
//     describe : accounting.describe
// }

// accountingCopy.describe();

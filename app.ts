class Department {
    // private id: string;
    // name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }
};

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }

    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }
};

const itAccounting = new ITDepartment('d1',['MARZ']);
const accountingDepartment = new AccountingDepartment('d2',[]);

accountingDepartment.addReport('this is the report');
accountingDepartment.printReports();

accountingDepartment.addEmployee('MARZ');
accountingDepartment.printEmployeeInformation();

itAccounting.describe();
itAccounting.addEmployee('Marz');
itAccounting.addEmployee('Sara');
//we set private keyword to employee array for this
// accounting.employees[2] = 'Nisa';

itAccounting.printEmployeeInformation();

// const accountingCopy = {
//     name: 'DUMMY',
//     describe : accounting.describe
// }

// accountingCopy.describe();

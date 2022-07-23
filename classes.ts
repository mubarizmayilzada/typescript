abstract class Department {
    static fiscalYear = 2020;
    // private id: string;
    // name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
        // this.id = id;

        //this.fiscalYear does not work because it is not instance of new department.
        // console.log(Department.fiscalYear);
    };

    static createEmployee(name: string){
        return {name: name}
    }

    abstract describe(this: Department): void;
    // {
        // console.log(`department: (${this.id}) ${this.name}`);
    // }

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

    describe() {
        console.log('IT Department - ID: ' + this.id);  
    }
};

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance:  AccountingDepartment;

    // get mostRecentReport() {
    //     if(this.lastReport){
    //         return this.lastReport;
    //     }
    //     throw new Error('No report found');
    // } 

    // set mostRecentReport(value: string) { 
    //     if (!value) {
    //         throw new Error('please pass in a valid value!');
    //     }
    //     this.addReport(value);
    // }

    static getInstance(){
        if (AccountingDepartment.instance) {
            return this.instance;
        };
        this.instance = new AccountingDepartment('d2',[]);
        return this.instance;
    }

    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);  
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
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

//with static keyword we can call directly from class like Math.random or smth.
const employee1 = Department.createEmployee('Marz');

const itAccounting = new ITDepartment('d1',['MARZ']);
const accountingDepartment = AccountingDepartment.getInstance();


itAccounting.describe();
accountingDepartment.describe();


// accountingDepartment.mostRecentReport = 'Year end report';
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

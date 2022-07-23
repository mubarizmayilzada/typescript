var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        // this.name = n;
        // this.id = id;
        this.id = id;
        this.name = name;
        // private id: string;
        // name: string;
        this.employees = [];
        //this.fiscalYear does not work because it is not instance of new department.
        // console.log(Department.fiscalYear);
    }
    ;
    Department.createEmployee = function (name) {
        return { name: name };
    };
    // {
    // console.log(`department: (${this.id}) ${this.name}`);
    // }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
;
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
;
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
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
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        ;
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment;
}(Department));
;
//with static keyword we can call directly from class like Math.random or smth.
var employee1 = Department.createEmployee('Marz');
var itAccounting = new ITDepartment('d1', ['MARZ']);
var accountingDepartment = AccountingDepartment.getInstance();
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

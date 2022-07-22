var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    ;
    Department.prototype.describe = function () {
        console.log(this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
;
var accounting = new Department('Accounting');
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

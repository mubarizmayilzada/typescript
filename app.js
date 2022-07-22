var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // name: string;
        this.employees = [];
        // this.name = n;
        // this.id = id;
    }
    ;
    Department.prototype.describe = function () {
        console.log("department: (".concat(this.id, ") ").concat(this.name));
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
var accounting = new Department('d1', 'Accounting');
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

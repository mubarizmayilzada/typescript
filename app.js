var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    ;
    Department.prototype.describe = function () {
        console.log(this.name);
    };
    return Department;
}());
;
var accounting = new Department('Accounting');
accounting.describe();
var accountingCopy = {
    name: 'DUMMY',
    describe: accounting.describe
};
accountingCopy.describe();

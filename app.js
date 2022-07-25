////this is the generic type / mean is one type related to other types.
// const arr: Array<string> = [];
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function countAndDescribe(element) {
    var descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 elements.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
countAndDescribe("hi there!");
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Marz" }, "name");
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Marz");
textStorage.addItem("Sara");
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
var objStorage = new DataStorage();
var nameObj = { name: "marz" };
objStorage.addItem(nameObj);
objStorage.addItem({ name: "Nisa" });
objStorage.removeItem(nameObj);
console.log(objStorage.getItems());
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
var names = ['marz', 'sara', 'nisa'];
// names.push('aras');
// names.pop();

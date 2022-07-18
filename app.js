// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] // tuble. this mean we can`t pass data more from two and also we cant pass string instead of number or opasite; 
// } = {
//     name: "Marz",
//     age: 19,
//     hobbies: ['hiking', 'puzzle'],
//     role: [1, 'developer']// tuble. this mean we can`t pass data more from two and also we cant pass string instead of number or opasite; 
// }
//this enum is just custom type
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["SUPER_ADMIN"] = "super admin";
    Role["AUTHOR"] = "author";
})(Role || (Role = {}));
;
var person = {
    name: "Marz",
    age: 19,
    hobbies: ['hiking', 'puzzle'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("this is ".concat(Role.ADMIN));
}
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
var favoriteActivities;
favoriteActivities = ['hiking']; // can`t contain any number or other types
//if we want to create an unikal array then we must use `any` type instead of string
console.log(product.price);

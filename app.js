var person = {
    name: "Marz",
    age: 19,
    hobbies: ['hiking', 'puzzle'],
    role: [1, 'developer'] // tuble. this mean we can`t pass data more from two and also we cant pass string instead of number or opasite; 
};
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

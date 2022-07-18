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
enum Role {ADMIN = 'admin', SUPER_ADMIN = 'super admin', AUTHOR = 'author'};


const person = {
    name: "Marz",
    age: 19,
    hobbies: ['hiking', 'puzzle'],
    role: Role.ADMIN
}

if(person.role === Role.ADMIN){
    console.log(`this is ${Role.ADMIN}`);
    
}


const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  } = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  };

  let favoriteActivities: string[];
  favoriteActivities = ['hiking'] // can`t contain any number or other types
  //if we want to create an unikal array then we must use `any` type instead of string



console.log(product.price);

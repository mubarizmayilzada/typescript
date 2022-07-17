const person: {
    name: string;
    age: number;
} = {
    name: "Marz",
    age: 19
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

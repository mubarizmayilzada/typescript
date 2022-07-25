////this is the generic type / mean is one type related to other types.
// const arr: Array<string> = [];

// const promise  = new Promise<string>((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve('Marz')
//     },2000) 
// });

// promise.then((data)=>{
//     data.split(' ');
// })

// function merge<T extends object,U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// const mergeObj = merge({name: 'marz', hobbies: ['hiking', 'puzzle']}, {age: 20});
// console.log(mergeObj.age);


interface Lengthly{
    length: number;
}

function countAndDescribe<T extends Lengthly>(element: T): [T, string]{
    let descriptionText = 'Got no value.'
    if(element.length === 1){
        descriptionText = 'Got 1 elements.';
    }
    else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

countAndDescribe('hi there!');

function extractAndConvert<T extends object,U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Marz'}, 'name');
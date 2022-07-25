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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'marz', hobbies: ['hiking', 'puzzle'] }, { age: 20 });
console.log(mergeObj.age);

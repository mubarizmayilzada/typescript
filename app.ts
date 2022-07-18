function combine(var1: number | string, var2: number | string){
    let result;
    if(typeof var1 === 'number' && typeof var2 === 'number'){
       return result = var1 + var2;
    }
    else{
        return result = var1.toString() + var2.toString();
    }
}


console.log(combine('marz','sara'));
console.log(combine(18,11));

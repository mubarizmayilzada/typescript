function combine(var1: number | string, var2: number | string, resultType: 'as-text' | 'as-number'){
    let result;
    if(typeof var1 === 'number' && typeof var2 === 'number' || resultType === 'as-number'){
       return result = +var1 + +var2;
    }
    else{
        return result = var1.toString() + var2.toString();
    }
}
// that is the union types ( | )

console.log(combine("marz", "sara", "as-text"));
console.log(combine(18,11, 'as-number'));

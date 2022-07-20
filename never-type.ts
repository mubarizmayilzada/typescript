let userInput: unknown;
let userName: string;

userInput =5;
userInput ='marz';

if(typeof userInput === 'string'){
    userName = userInput;
};

function generateError(message: string,code: number): never{
    throw {message: message,errorCode: code};
}
//if function holding the throw error or infinity loop (while(true)) this mean the function type is never, not void because it don`t show even undefined; 

generateError('this is an error message', 500);
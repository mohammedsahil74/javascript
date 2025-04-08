const prompt = require('prompt-sync') ();


let number1;
let number2;

while(true){
  number1 = (Number(prompt('enter number 1 :')));
  if(isNaN(number1)){
    console.log('invalid input');
  }else{
    break
  }

}
while(true){
  number2 = (Number(prompt('enter number 2 :')));
  if(isNaN(number2)){
    console.log('invalid input');
  }else{
    break
  }

}
const operator = prompt('enter sign :');

let result;
let valid = true;

switch(operator){
  case '+':
    result = (number1 + number2);
    break;

  case '-':
    result = (number1 - number2);
    break;

  case '*':
    result = (number1 * number2);
    break;

  case '/':
    result = (number1 / number2);
    break;

  default:
      console.log('invalid');
      valid = false;
      break;
}
if (valid)
  console.log(number1,operator,number2,"=",result);
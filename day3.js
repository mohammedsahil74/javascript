const prompt = require('prompt-sync')();

function printInfo(){
  console.log('Contact Management System');
  console.log('-------------------------');
  console.log('1. Add Contact.');
  console.log('2. Delete Contact.');
  console.log('3. Search Contacts.');
  console.log('4. View Contact.');
  console.log('5. Exit!');
}
printInfo();

function addContact(){

}
function deleteContact(){

}
function searchContact(){

}
function viewContact(Contacts){

}


const number = number(prompt('enter your operation(1-5)'));
let keepGoing = true;

while(true){

switch (number){
  case '1':
   addContact()
    break;

  case '2':
    deleteContact()
    break;

  case '3':
    searchContact()
    break;

  case '4':
    viewContact()
    break;

  case '5':
    keepGoing = false;
    break;

  default:
    console.log('unknow')
    break;
}};
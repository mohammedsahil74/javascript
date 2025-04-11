const prompt = require('prompt-sync')();

function printInfo(){
  console.log('Contact Management System');
  console.log('-------------------------');
  console.log('1. Add Contact.');
  console.log('2. Delete Contact.');
  console.log('3. view Contacts.');
  console.log('4. search Contact.');
  console.log('5. Exit!');
}
printInfo();

function addContact(){
    const name = prompt('enter your name:')
    const email = prompt('enter your email:')
    const Contact ={
      name :name,
      email:email
    }
    contacts.push(Contact)
}
function deleteContact(){

}
function searchContact(){

}
function viewContact(Contacts){
  console.log(contacts)
}

const contacts = [];
let keepGoing = true;


while(true){
  
  const number = prompt('enter your operation(1-5)');
switch (number){
  case '1':
   addContact()
   
    break;

  case '2':
    deleteContact()
    break;

  case '3':
    viewContact(contacts)
    break;

  case '4':
   searchContact()
    break;

  case '5':
    keepGoing = false;
    break;

  default:
    console.log('unknown')
    break;
}};
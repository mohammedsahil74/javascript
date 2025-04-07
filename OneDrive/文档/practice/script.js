let prompt = require('prompt-sync')();

let latestBalance;
//
let balance = Number (prompt('enter the amount you want to deposit'))
console.log("you have :" + balance );
let addAmount = Number (prompt("enter your amount:"))

//deposit 
function deposit(credited){
    
    balance += credited;
    
    console.log('total balance after deposit:' + balance)
}
deposit(addAmount)

let withdrawAmt = Number(prompt('enter your amount to withdraw :'))

// withdrawl
function withdraw(debited){
    if (balance < 0){
        console.log('invalid amount')
    }else{
    balance -= debited;
    console.log('total balance after withdrawl:' + balance)
}}
withdraw(withdrawAmt);
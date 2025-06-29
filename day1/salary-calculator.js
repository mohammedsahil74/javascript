// variables.
let owner = `sahil`;
let baseSalary = 25000;
let bonus = 200;
let tax = 0.1;

let SalaryBeforeTax = baseSalary + bonus;
console.log(`salary before tax ${SalaryBeforeTax}`);

let afterTax = SalaryBeforeTax - (SalaryBeforeTax * tax);
console.log(`salary after tax ${afterTax}`);

let exactSalary = afterTax;
console.log(`your take-home salary is ${exactSalary}`)



let money = 5000;
let income = 'от бабушки';
let addExpenses = 'Долг соседу, На обеды в забегаловках, Пивко, На ветер';
let deposit = true;
let mission = 750000000;
let period = 7;

console.log(typeof(money), typeof(income), typeof(deposit));
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} долларов`);
console.log(addExpenses.toLocaleLowerCase().split(', '));

let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);

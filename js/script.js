'use strict'
let money = prompt(`Ваш месячный доход? (Рос.руб)`);
let income = 'от бабушки';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;
let period = 12;

let expenses1 = prompt('Введите обязательную статью расходов?”');
let amount1 = prompt('Во сколько это обойдется? (Рос.руб)');
let expenses2 = prompt('Введите обязательную статью расходов?”');
let amount2 = prompt('Во сколько это обойдется? (Рос.руб)');

let budgetMonth =  Number(money) - (Number(amount1) + Number(amount2));
if (budgetMonth <= 0) {
    console.log('Вы очень много тратите и ничего не зарабатываете!');
} else {
    console.log('Месячный бюджет: ', budgetMonth , '(Рос.руб)');
}
let achieved = Math.ceil(mission / budgetMonth);
if (isNaN(achieved) || achieved === Infinity) {
    console.log('Ваши доходы равны вашим расходам! Это печально, но факт...Сражайтесь!');
} else {
    console.log('Цель будет достигнута за: ', achieved, 'месяцев');
}


let budgetDay = Math.floor(budgetMonth / 30);

if (budgetDay <= 0 ) {
    console.log(`Ваш дневной бюджет ${budgetDay} (рос.руб), так вы ничего не накопите`);
} else {
    console.log(`Ваш дневной бюджет ${budgetDay} (рос.руб`);
}


console.log(typeof(money), typeof(income), typeof(deposit));
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рос.рублей`);
console.log(addExpenses.toLocaleLowerCase().split(', '));


console.log('budgetDay: ', budgetDay);
console.log('money: ', money);
console.log('addExpenses: ', addExpenses);
console.log('deposit: ', deposit);
console.log('budgetMonth: ', budgetMonth);
console.log('period: ', period);


if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay > 0 && budgetDay <= 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
} else if (budgetDay === 0) {
    console.log('Ноль! У вас полный ноль! Крепитесь!');
}
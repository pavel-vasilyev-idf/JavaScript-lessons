'use strict'
let money = prompt(`Ваш месячный доход?`);
let income = 'от бабушки';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 8000;

let expenses1 = prompt('Введите обязательную статью расходов?”');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?”');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = (money - Number(amount1) - Number(amount2));
let period = Math.ceil(mission / budgetMonth);
let budgetDay = Math.floor(budgetMonth / 30);


console.log(typeof(money), typeof(income), typeof(deposit));
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} долларов`);
console.log(addExpenses.toLocaleLowerCase().split(', '));


console.log('budgetDay: ', budgetDay);
console.log('money: ', money);
console.log('addExpenses: ', addExpenses);
console.log('deposit: ', deposit);
console.log('budgetMonth: ', budgetMonth);
console.log('period: ', period);


if (budgetDay > 15) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 8 && budgetDay <= 15) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay > 0 && budgetDay <= 8) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}


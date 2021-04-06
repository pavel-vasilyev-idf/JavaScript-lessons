// functions task

'use strict'

let money = +prompt(`Ваш месячный доход? (Рос.руб)`, '40000');
let income = 'от бабушки';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'каршеринг, шаурма, на ветер');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;


let expenses1 = prompt('Введите обязательную статью расходов?', 'телефон');
let amount1 = +prompt('Во сколько это обойдется? (Рос.руб)', '2000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'семья');
let amount2 = +prompt('Во сколько это обойдется? (Рос.руб)', '10000');


//- вызовы функции showTypeOf
let showTypeOf = function (data) {
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



//- Расходы за месяц вызов getExpensesMonth
function getExpensesMonth(a, b) {
    return  a + b;
};
console.log('Сумма всех обязательных расходов за месяц: ', getExpensesMonth(amount1, amount2), '(рос.руб)');

function getAccumulatedMonth(a, b) {
    return  a - b;
}

let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));



//- Вывод возможных расходов в виде массива (addExpenses)
console.log('Возможные расходы:' ,addExpenses);


//- Накопления за месяц

let getAccumulatedMonthConclusion = function () {
    if (accumulatedMonth  > 0) {
        return (`Накопления за месяц: ${accumulatedMonth} (рос.руб)`); 
    } else {
        return ('Вы тратите больше, чем копите. Остановитесь!'); 
    }
}

console.log(getAccumulatedMonthConclusion());




// - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
let targetMonth = Math.ceil(mission / accumulatedMonth);

let getTargetMonth = function () {

    if (targetMonth > 0) {
        return (`Cрок достижения цели: ${targetMonth} мес.`)
    } else {
        return (`С вашим доходом задача невыполнима`)
    }
};

console.log(getTargetMonth());



// - Бюджет на день (budgetDay)
let budgetDay = Math.floor(accumulatedMonth / 30);

let getBudgetDay = function () {
    if (budgetDay <= 0 ) {
        return (`Ваш дневной бюджет ${budgetDay} (рос.руб), так вы ничего не накопите`);
    } else {
        return (`Ваш дневной бюджет ${budgetDay} (рос.руб)`);
    }
}

console.log(getBudgetDay());


// - вызов функции getStatusIncome
let getStatusIncome = function () {
    if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay > 600 && budgetDay <= 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay <= 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
        return ('Что то пошло не так');
    } else if (budgetDay === 0) {
        return ('Ноль! У вас полный ноль! Крепитесь!');
    }
}


console.log(getStatusIncome());
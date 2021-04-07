// functions task

'use strict'

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


let money;
let income = 'от бабушки';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'каршеринг, шаурма, на ветер');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;


//- функция проверки входящих данных

// let start = function () {
//     money = +prompt(`Ваш месячный доход? (Рос.руб)`, '40000');

//     while (!isNumber(money)) {
//         money = +prompt(`Вы ничего не ввели. Повторите попытку! (Рос.руб)`);
//     }
// };
// start();


// -функция start циклом do while 
let start = function () {
    do {
        isNumber(money)
        money = +prompt(`Ваш месячный доход? (Рос.руб)`, '40000');
    } while (!isNumber(money));
};

start();


//- вызовы функции showTypeOf
let showTypeOf = function (data) {
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



//- Расходы за месяц вызов getExpensesMonth

let expenses = []

function getExpensesMonth() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');

        let checkSum = function () {
            let checkCount = 0;
            do {
                isNumber(checkCount)
                checkCount = prompt(`Какова сумма расхода? (Рос.руб)`);
            } while (!isNumber(checkCount));

            return +checkCount;
        };
        
        sum += checkSum();
    }
    console.log('Обязательные статьи расходов' , expenses);
    return  sum;
};

let expensesMonth = getExpensesMonth();

console.log('Сумма всех обязательных расходов за месяц: ', expensesMonth, '(рос.руб)');

function getAccumulatedMonth(a, b) {
    return  a - b;
}

let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);



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
        return (`Цель не будет достигнута. С вашим доходом задача невыполнима.`)
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
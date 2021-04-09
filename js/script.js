// functions task

'use strict'

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
//- функция проверки входящих данных

// let start = function () {
//     money = +prompt(`Ваш месячный доход? (Рос.руб)`, '40000');

//     while (!isNumber(money)) {
//         money = +prompt(`Вы ничего не ввели. Повторите попытку! (Рос.руб)`);
//     }
// };
// start();



let money;

// -функция start циклом do while 
let start = function () {
    do {
        isNumber(money)
        money = +prompt(`Ваш месячный доход? (Рос.руб)`, '40000');
    } while (!isNumber(money));
};

start();



const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 12,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'каршеринг, шаурма, на ветер');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            appData.expenses[prompt('Введите обязательную статью расходов?')] = function () {
                let checkCount = 0;
                do {
                    checkCount = prompt('Какова сумма расхода (рос. руб)?');
                } while (!isNumber(checkCount));
                return +checkCount;
            }();
            console.log(appData.expenses);
        }
    },
    budget: money,
    budgetDay: 0,
    budgetMonth : 0,
    expensesMonth: 0,
    getExpensesMonth: function () {
        
    },
    getAccumulatedMonth: function (a, b) {
        return  a - b;
    },
    getAccumulatedMonthConclusion: function () {
        if (accumulatedMonth  > 0) {
            return (`Накопления за месяц: ${accumulatedMonth} (рос.руб)`); 
        } else {
            return ('Вы тратите больше, чем копите. Остановитесь!'); 
        }
    },
    getTargetMonth: function () {

        if (targetMonth > 0) {
            return (`Cрок достижения цели: ${targetMonth} мес.`)
        } else {
            return (`Цель не будет достигнута. С вашим доходом задача невыполнима.`)
        }
    },
    getStatusIncome: function () {
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
    },
    getBudgetDay: function () {
        if (budgetDay <= 0 ) {
            return (`Ваш дневной бюджет ${budgetDay} (рос.руб), так вы ничего не накопите`);
        } else {
            return (`Ваш дневной бюджет ${budgetDay} (рос.руб)`);
        }
    }
}

//- asking
let asking = appData.asking();

//- Расходы за месяц вызов getExpensesMonth
let expensesMonth = appData.getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц: ', expensesMonth, '(рос.руб)');
let accumulatedMonth = appData.getAccumulatedMonth(appData.budget, expensesMonth);


//- Вывод возможных расходов в виде массива (addExpenses)
console.log('Возможные расходы:', appData.addExpenses);


//- Накопления за месяц
console.log(appData.getAccumulatedMonthConclusion());


// - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
let targetMonth = Math.ceil(appData.mission / accumulatedMonth);
console.log(appData.getTargetMonth());



// - Бюджет на день (budgetDay)
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log(appData.getBudgetDay());


// - вызов функции getStatusIncome
console.log(appData.getStatusIncome());
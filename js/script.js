// functions task

'use strict'

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
//- функция проверки входящих данных


//- честно стыренный код из инета. Долнго не могу понять как запилить двойную проверку
const isString = (str, comma = false) => {
    const pattern = comma ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
    return pattern.test(str);
};

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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1000000,
    period: 12,
    asking: function () {

        if (confirm(' Есть ли у вас доп.заработок? ')) {
let itemIncom = '';
            do {
                itemIncom = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            } while (!isString(itemIncom));
            
            let cashIncom = 0;
            do {
                cashIncom = prompt('Сколько в месяц Вы на этом зарабатываете?', 10000);
            } while (!isNumber(cashIncom));
            
            appData.income[itemIncom] = +cashIncom;

        }

        let addExpenses = '';
        do {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'каршеринг, шаурма, на ветер');
        } while (!isString(addExpenses, true));
        
        appData.addExpenses = addExpenses.toLowerCase().split(',').map(val => val.trim());

        
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {

            let strExp = '';
            do {
                strExp = prompt('Введите обязательную статью расходов?');
            } while (!isString(strExp));

            appData.expenses[strExp] = (() => {
                let checkCount = 0;
                do {
                    checkCount = prompt('Какова сумма расхода (рос. руб)?');
                } while (!isNumber(checkCount));
                return +checkCount;
            })();
            // console.log(appData.expenses);
        }
    },
    budget: +money,
    budgetDay: 0,
    budgetMonth : 0,
    expensesMonth: 0,
    getExpensesMonth: function () {
        appData.expensesMonth = 0;
        for (let key in appData.expenses) {
            appData.expensesMonth = appData.expensesMonth + appData.expenses[key];
        }
        return appData.expensesMonth;
    },
    getBudget: function () {
        if (!appData.budgetDay) {
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        }
    },
    getTargetMonth: function () {
        let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);

        if (targetMonth > 0) {
            return (`Cрок достижения цели: ${targetMonth} мес.`)
        } else {
            return (`Цель не будет достигнута. С вашим доходом задача невыполнима.`)
        }
    },
    getStatusIncome: function () {
        if (appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay > 0 && appData.budgetDay <= 600) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay < 0) {
            return ('Что то пошло не так');
        } else if (appData.budgetDay === 0) {
            return ('Ноль! У вас полный ноль! Крепитесь!');
        }
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                isNumber(appData.percentDeposit)
                appData.percentDeposit = +prompt(' Какой у вас годовой процент?, %', 10);
            } while (!isNumber(appData.percentDeposit) && appData.percentDeposit > 0);
            do {
                isNumber(appData.moneyDeposit)
                appData.moneyDeposit = +prompt(' Какая сумма заложена? ', 10000)
            } while (!isNumber(appData.moneyDeposit) && appData.moneyDeposit > 0);
        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
    },
}

//- asking
appData.asking();

//- Расходы за месяц вызов getExpensesMonth
let expensesMonth = appData.getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц: ', expensesMonth, '(рос.руб)');

//- Вывод возможных расходов в виде массива (addExpenses)
// console.log('Возможные расходы:', appData.addExpenses);
console.log('Возможные расходы:' + appData.addExpenses.map((val, i) => val[0].toUpperCase() + val.slice(1)).join(', '));


//- Накопления за месяц
appData.getBudget();
// console.log('Накопления за месяц', appData.budgetMonth);

// - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
console.log(appData.getTargetMonth());

// - вызов функции getStatusIncome
console.log(appData.getStatusIncome());

console.log( "Наша программа включает в себя данные: ");
for (const key in appData) {
    console.log(key, appData[key]);
}

//- депозит
appData.getInfoDeposit();


// console.log(appData.percentDeposit);
// console.log(appData.moneyDeposit);
// console.log(appData.calcSaveMoney());


'use strict'

const start = document.getElementById('start'); //- Кнопка "Рассчитать"
const incomeAdd = document.getElementsByTagName('button')[0]; //- Первый плюс
const expensesAdd = document.getElementsByTagName('button')[1]; //- Второй плюс
const depositCheck = document.querySelector('#deposit-check'); //- Чекбокс Депозит

//- Блок "Возможный доход"
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');  //- 2 инпута "Наименование" 


//- right path
const budgetMonthVvalue = document.getElementsByClassName('budget_month-value')[0]; //- Доход за месяц
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0]; //- Дневной бюджет
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0]; //- Расход за месяц
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0]; //- Возможнные доходы
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0]; //- Возможнные расходы
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0]; //- Накопления за период
const targetMonthValue = document.getElementsByClassName('target_month-value')[0]; //- Срок достижения цели в месяцах


//- left path

//- Блок "Месячный доход"
const salaryAmount = document.querySelector('.salary-amount'); //- Тайтл

//- Блок "Дополнительный доход"
const incomeTitle = document.querySelector('.income-title'); //- Наименование
let incomeItems = document.querySelectorAll('.income-items'); //- Блок Наименование + Сумма


//- Блок "Обязательные расходы"
const expensesTitle = document.querySelector('.expenses-title'); //- Наименование
let expensesItems = document.querySelectorAll('.expenses-items'); //- Блок Наименование + Сумма

//- Возможные расходы(через запятую)
const additionalExpensesTitle = document.querySelector('.additional_expenses-title'); //- Тайтл
const additionalExpensesItem = document.querySelector('.additional_expenses-item'); //- Расходы через запятую
const targetAmount = document.querySelector('.target-amount'); //- Сумма

//- Период расчета
const periodTitle = document.querySelector('.period-title'); //- Тайтл
const periodSelect = document.querySelector('.period-select'); //- Ползунок периода расчета
const periodAmount = document.querySelector('.period-amount'); //- Количество



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

const appData = {
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth : 0,
    expensesMonth: 0,
    start: function () { 

        appData.budget = +salaryAmount.value;
        console.log('salaryAmount.value: ', salaryAmount.value);

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();

        // - Расходы за месяц вызов getExpensesMonth
        let expensesMonth = appData.getExpensesMonth();
        console.log('Сумма всех обязательных расходов за месяц: ', expensesMonth, '(рос.руб)');

        //- Накопления за месяц
        console.log('Накопления за месяц', appData.budgetMonth);

        // //- депозит
        // appData.getInfoDeposit();
    },
    showResult: function () {  
        budgetMonthVvalue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcSaveMoney();
    },
    getIncome: function () {
        appData.incomeMonth = 0;
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cacheIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cacheIncome !== '') {
                appData.income[itemIncome] = cacheIncome;
                appData.incomeMonth += +cacheIncome;
            }
        })
    },
    getPeriodAmount: function () {  

        periodAmount.innerHTML = periodSelect.value;
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cacheExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cacheExpenses !== '') {
                appData.expenses[itemExpenses] = cacheExpenses;
            }
        })
    },
    getAddExpenses: function () {  
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) { 
            item = item.trim();
            
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function () {  
        additionalIncomeItem.forEach(function (item) {  
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        })
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomeAdd.style.display = 'none';
        }
    }, 
    addExpensesBlock: function () { //- Добавление нового блока по кнопке Плюс
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesAdd.style.display = 'none';
        }
    },
    getExpensesMonth: function () {
        appData.expensesMonth = 0;
        for (let key in appData.expenses) {
            appData.expensesMonth = +appData.expensesMonth + +appData.expenses[key];
        }
        return appData.expensesMonth;
    },
    getBudget: function () {
        if (!appData.budgetDay) {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        }
    },
    getTargetMonth: function () {
        return Math.ceil( targetAmount.value / appData.budgetMonth);
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
        return appData.budgetMonth * periodSelect.value;
    },
    disabledStart: () => {
        start.disabled = !salaryAmount.value.trim();
    }

}


//- Нажатие по кнопке "Рассчитать"
appData.disabledStart();
salaryAmount.addEventListener('input', appData.disabledStart);
start.addEventListener('click', appData.start);
expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriodAmount);
// - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
// console.log(appData.getTargetMonth());



// console.log( "Наша программа включает в себя данные: ");
// for (const key in appData) {
//     console.log(key, appData[key]);
// }


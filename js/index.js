'use strict'

const start = document.getElementById('start'); //- Кнопка "Рассчитать"
const incomeAdd = document.getElementsByTagName('button')[0]; //- Первый плюс
const expensesAdd = document.getElementsByTagName('button')[1]; //- Второй плюс
const depositCheck = document.querySelector('#deposit-check'); //- Чекбокс Депозит

//- Блок "Возможный доход"
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');  //- 2 инпута "Наименование" 


//- right path
const budgetMonthVvalue = document.getElementsByClassName('budget_month-value'); //- Доход за месяц
const budgetDayValue = document.getElementsByClassName('budget_day-value'); //- Дневной бюджет
const expensesMonthValue = document.getElementsByClassName('expenses_month-value'); //- Расход за месяц
const additionalIncomeValue = document.getElementsByClassName('additional_income-value'); //- Возможнные доходы
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'); //- Возможнные расходы
const incomePeriodValue = document.getElementsByClassName('income_period-value'); //- Накопления за период
const targetMonthValue = document.getElementsByClassName('target_month-value'); //- Срок достижения цели в месяцах


//- left path

//- Блок "Месячный доход"
const salaryAmount = document.querySelector('.salary-amount'); //- Тайтл

//- Блок "Дополнительный доход"
const incomeTitle = document.querySelector('.income-title'); //- Наименование
const incomeAmount = document.querySelector('.income-amount'); //- Сумма

//- Блок "Обязательные расходы"
const expensesTitle = document.querySelector('.expenses-title'); //- Наименование
const expensesItems = document.querySelectorAll('.expenses-items');

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
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1000000,
    period: 12,
    start: function () { // -функция start циклом do while 
        // do {
        //     isNumber(money)
        //     money = +prompt(`Ваш месячный доход? (Рос.руб)`, '40000');
        // } while (!isNumber(money) || money === '' || money === null);
        if (salaryAmount.value === '') {
            alert('Заполните, пожалуйста, поле "Месячный дохо"');
            return;
        }
        appData.budget = salaryAmount.value;
        console.log('salaryAmount.value: ', salaryAmount.value);


        //- asking
        // appData.asking();

        //- Расходы за месяц вызов getExpensesMonth
        // let expensesMonth = appData.getExpensesMonth();
        // console.log('Сумма всех обязательных расходов за месяц: ', expensesMonth, '(рос.руб)');

        // //- Накопления за месяц
        // appData.getBudget();
        // // console.log('Накопления за месяц', appData.budgetMonth);

        // //- депозит
        // appData.getInfoDeposit();
    },
    addExpensesBlock: function () { //- Добавление нового блока по кнопке Плюс
        let cloneexpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneexpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesAdd.style.display = 'none';
        }
    },
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
    budget: 0,
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


//- Нажатие по кнопке "Рассчитать"
start.addEventListener('click', appData.start);
expensesAdd.addEventListener('click', appData.addExpensesBlock)

// - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
// console.log(appData.getTargetMonth());



// console.log( "Наша программа включает в себя данные: ");
// for (const key in appData) {
//     console.log(key, appData[key]);
// }


'use strict'

const start = document.getElementById('start'); //- Кнопка "Рассчитать"
const incomeAdd = document.getElementsByTagName('button')[0]; //- Первый плюс
const expensesAdd = document.getElementsByTagName('button')[1]; //- Второй плюс
const depositCheck = document.querySelector('#deposit-check'); //- Чекбокс Депозит
const depositBank = document.querySelector('.deposit-bank');
const depositCalc = document.querySelector('.deposit-calc');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');


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


class AppData {
    constructor() {
        this.income = {}, // Статья доп дохода
        this.addIncome = [],
        this.incomeMonth = 0,
        this.expenses = {}, // список обязательных расходов
        this.addExpenses = [], // доп расходы
        this.deposit = false, // надичие депозита в банке
        this.percentDeposit = 0, // под какой % вложено
        this.moneyDeposit = 0, // сколько вложено
        this.budget = 0, // месячный доход
        this.budgetDay = 0, // днеевной бюджет
        this.budgetMonth  = 0,
        this.expensesMonth = 0,
        this.disabled = false
    }

    start() {
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getInfoDeposit();
        this.getBudget();
        this.showResult();
        // //- депозит
        // appData.getInfoDeposit();
    
        //- Смена контента кнопки
        if (start.textContent === 'Рассчитать') {
            start.textContent = 'Сбросить';
            this.disableInputs();
        } else {
            start.textContent = 'Рассчитать';
            this.reset();
        }
    }

    showResult() {
        budgetMonthVvalue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSaveMoney();
        periodSelect.addEventListener('input', () => {
                incomePeriodValue.value = this.calcSaveMoney();
            });
    }

    reset() {
        incomeAdd.style.display = 'block';
        expensesAdd.style.display = 'block';
    
        for (let i = incomeItems.length; i > 1; i--) {
            incomeItems[i - 1].remove();
        };
        for (let i = expensesItems.length; i > 1; i--) {
            expensesItems[i - 1].remove();
        };
    
    
        periodSelect.value = 1;
        periodAmount.innerHTML = periodSelect.value;
    
        document.querySelectorAll('input[type=text]').forEach((item) => {
            item.value = '';
        })
        this.disableInputs(false);
        this.getBudget();
        this.disabledStart();
    }
    
    disableInputs(disabled = true) {
        document.querySelectorAll('.data input[type=text]').forEach((item) => {
            item.disabled = disabled;
        });
        depositCheck.disabled = disabled;
        depositBank.disabled = disabled;
    }

    getIncome() {
        this.incomeMonth = 0;
        incomeItems.forEach((item) => {
        let itemIncome = item.querySelector('.income-title').value;
        let cacheIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cacheIncome !== '') {
            this.income[itemIncome] = +cacheIncome;
            this.incomeMonth += +cacheIncome;
        }
    })
    }

    getPeriodAmount() {
        periodAmount.innerHTML = periodSelect.value;
    }
    getExpenses() {
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cacheExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cacheExpenses !== '') {
                this.expenses[itemExpenses] = +cacheExpenses;
            }
        })
    }
    getAddExpenses() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => { 
            item = item.trim();
            
            if (item !== '') {
                this.addExpenses.push(item);
            }
        })
    }

    getAddIncome() {
        additionalIncomeItem.forEach((item) => {  
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        })
    }

    addIncomeBlock() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomeAdd.style.display = 'none';
        }
    }

    addExpensesBlock() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesAdd.style.display = 'none';
        }
    }

    getExpensesMonth() {
        appData.expensesMonth = 0;
        for (let key in this.expenses) {
            this.expensesMonth = +this.expensesMonth + +this.expenses[key];
        }
        return this.expensesMonth;
    }

    getBudget() {
        const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
        this.budget = +salaryAmount.value;
        if (!this.budgetDay) {
            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
            this.budgetDay = Math.floor(this.budgetMonth / 30);
        }
    }

    getTargetMonth() {
        return Math.ceil( targetAmount.value / this.budgetMonth);
    }

    getStatusIncome() {
        if (this.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (this.budgetDay > 600 && this.budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
        } else if (this.budgetDay > 0 && this.budgetDay <= 600) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (this.budgetDay < 0) {
            return ('Что то пошло не так');
        } else if (this.budgetDay === 0) {
            return ('Ноль! У вас полный ноль! Крепитесь!');
        }
    }

    calcSaveMoney() {
        return this.budgetMonth * periodSelect.value;
    }

    disabledStart() {
        start.disabled = !salaryAmount.value.trim();
    }

    getInfoDeposit() {
        if (this.deposit) {
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    }

    changPercent() {
        const valueSelect = this.value;
        if (!valueSelect) {
            depositAmount.disabled = true;
        } else {
            depositAmount.disabled = false;
            if (valueSelect === 'other') {
                depositPercent.style.display = 'inline-block';
                depositPercent.value = '';
            } else {
                depositPercent.style.display = 'none';
                depositPercent.value = valueSelect;
            }
        }
    }

    depositHandler() {
        if (depositCheck.checked) {
            depositBank.style.display = 'inline-block';
            depositCalc.style.display = 'block';
            depositAmount.style.display = 'inline-block';
            depositAmount.disabled = true;
            this.deposit = true;
            depositBank.addEventListener('change', this.changPercent);
        } else {
            depositBank.style.display = 'none';
            depositCalc.style.display = 'none';
            depositAmount.style.display = 'none';
            depositPercent.style.display = 'none';
            depositBank.value = '';
            depositAmount.value = '';
            this.deposit = false;
            depositBank.removeEventListener('change', this.changPercent);
        }
    }
    
    eventsListeners() {
        const newStart = appData.start.bind(this); //- Связь appData с контекстами this
        start.addEventListener('click', newStart);
        //- Нажатие по кнопке "Рассчитать"
        this.disabledStart();
        salaryAmount.addEventListener('input', this.disabledStart);
        // start.addEventListener('click', appData.start);
        expensesAdd.addEventListener('click', this.addExpensesBlock);
        incomeAdd.addEventListener('click', this.addIncomeBlock);
        periodSelect.addEventListener('input', this.getPeriodAmount);
        // - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
        // console.log(appData.getTargetMonth()); 
        depositCheck.addEventListener('change', this.depositHandler.bind(this));
    }

}

const appData = new AppData();

appData.eventsListeners();
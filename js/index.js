'use strict'

const calculateBtn = document.getElementById('#start'); //- Кнопка "Рассчитать"
console.log('calculateBtn: ', calculateBtn);
const incomeAdd = document.getElementsByTagName('button')[0]; //- Первый плюс
console.log('incomeAdd: ', incomeAdd);
const expensesAdd = document.getElementsByTagName('button')[1]; //- Второй плюс
console.log('expensesAdd: ', expensesAdd);
const depositCheck = document.querySelector('#deposit-check'); //- Чекбокс Депозит
console.log('depositCheck: ', depositCheck);

//- Блок "Возможный доход"
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');  //- 2 инпута "Наименование" 
console.log('additionalIncomeItem: ', additionalIncomeItem); 


//- right path

const budgetMonthVvalue = document.getElementsByClassName('budget_month-value'); //- Доход за месяц
console.log('budgetMonthVvalue: ', budgetMonthVvalue);

const budgetDayValue = document.getElementsByClassName('budget_day-value'); //- Дневной бюджет
console.log('budgetDayValue: ', budgetDayValue);

const expensesMonthValue = document.getElementsByClassName('expenses_month-value'); //- Расход за месяц
console.log('expensesMonthValue: ', expensesMonthValue);

const additionalIncomeValue = document.getElementsByClassName('additional_income-value'); //- Возможнные доходы
console.log('additionalIncomeValue: ', additionalIncomeValue);

const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'); //- Возможнные расходы
console.log('additionalExpensesValue: ', additionalExpensesValue);

const incomePeriodValue = document.getElementsByClassName('income_period-value'); //- Накопления за период
console.log('incomePeriodValue: ', incomePeriodValue);

const targetMonthValue = document.getElementsByClassName('target_month-value'); //- Срок достижения цели в месяцах
console.log('targetMonthValue: ', targetMonthValue);



//- some element left path

//- Блок "Месячный доход"
const salaryAmount = document.querySelector('.salary-amount'); //- Тайтл
console.log('salaryAmount: ', salaryAmount);


//- Блок "Дополнительный доход"
const incomeTitle = document.querySelector('.income-title'); //- Наименование
console.log('incomeTitle: ', incomeTitle);

const incomeAmount = document.querySelector('.income-amount'); //- Сумма
console.log('incomeAmount: ', incomeAmount);


//- Блок "Обязательные расходы"
const expensesTitle = document.querySelector('.expenses-title'); //- Тайтл
console.log('expensesTitle: ', expensesTitle);

const expensesTitleInput = document.querySelector('.expenses-title') //- Наименование
console.log('expensesTitleInput: ', expensesTitleInput);

const expensesAmount = document.querySelector('.income-amount'); //- Сумма
console.log('expensesAmount: ', expensesAmount); 

//- Возможные расходы(через запятую)
const additionalExpensesTitle = document.querySelector('.additional_expenses-title'); //- Тайтл
console.log('additionalExpensesTitle: ', additionalExpensesTitle);

const additionalExpensesItem = document.querySelector('.additional_expenses-item'); //- Расходы через запятую
console.log('additionalExpensesItem: ', additionalExpensesItem);

const targetAmount = document.querySelector('.target-amount'); //- Сумма
console.log('targetAmount: ', targetAmount);

//- Период расчета
const periodTitle = document.querySelector('.period-title'); //- Тайтл
console.log('periodTitle: ', periodTitle);

const periodSelect = document.querySelector('.period-select'); //- Ползунок периода расчета
console.log('periodSelect: ', periodSelect);

const periodAmount = document.querySelector('.period-amount'); //- Количество
console.log('periodAmount: ', periodAmount);
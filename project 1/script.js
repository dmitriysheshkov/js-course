'use strict';

let money,
    time;
    
let question = {
    budget: 'Ваш бюджет на месяц?',
    date: 'Введите дату в формате YYYY-MM-DD',
    expenditure: 'Введите обязательную статью расходов в этом месяце.',
    howMuch: 'Во сколько обойдется?'
};

let appData = {
    budget: money,  // бюджет
    timeData: time, // данные времени
    expenses: {},   // обязательные расходы
    optionalExpenses: {}, // необязательные расходы
    income: [], // дополнительные доходы
    saving: false   
};

let getAnswer = function(question, defaultAnswer) {
    return prompt(question, defaultAnswer);
};

money = getAnswer(question.budget, '');
appData.budget = money;

time = getAnswer(question.date, '');
appData.timeData = time;

for (let i = 0; i < 2; i++) {
    appData.expenses[getAnswer(question.expenditure, '')] = getAnswer(question.howMuch, '');
}
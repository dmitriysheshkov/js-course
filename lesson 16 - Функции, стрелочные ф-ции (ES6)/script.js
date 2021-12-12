// объявление функций

// объявление функций function declaration (function definition, function statement)
//  - работает, как var - существует до того, как объявлена в коде.
function showFirstMessage (text) { // в скобках ПАРАМЕТРЫ, а передавать будем аргументы
    console.log(text);
}

showFirstMessage('Hello World!');

// как ведут себя переменные внутри функций?
// замыкание - это сама функция со всеми переменными, включая внешние, которые ей доступны. 
let num = 20;

function showFirstMessage (text) { // в скобках ПАРАМЕТРЫ, а передавать будем аргументы
    console.log(text);
    let num = 10;
    return 77;
}

console.log(num);
console.log(showFirstMessage('Hello!'));

// return - последняя инструкция в функции. Инструкции, которые идут после неё - нечитаемы.
function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 6));
console.log(calc(4, 3));
console.log(calc(2, 7));

// обявление function expression - работает, как переменная (ставим точку с запятой, в отличие от function declaration),
// может использоваться только после того, как объявлена.
const logger = function() {
    console.log('Hello!');
};

logger();


// объявление стрелочной функции (ES6, 2015 год)
const numCalc = (a, b) => { return a + b; };

numCalc(5, 6);




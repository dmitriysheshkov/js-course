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
const numCalc = (a) => a * a;
console.log(numCalc(5, 6));

// пример поиска мансимального нечётного числа из массива с пом arrow function
const arr = ['1', '3', '2', '4'];

const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value, 0));

console.log(res);

// если в блоке инструкций функции строк больше, чем одна, то их нужно заключать в фигурные скобки,
// при этом интсрукция return становится обязательной
const numCalc2 = (a) => {
    return a * a;
};

console.log(numCalc2(5, 6));

// нужно разобраться как всё-таки работает this и prototype в стрелочных функциях. (см. Буру, урок 9)





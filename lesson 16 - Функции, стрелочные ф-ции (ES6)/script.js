// объявление функций

// объявление функций function declaration (function definition, function statement)
function showFirstMessage (text) { // в скобках ПАРАМЕТРЫ, а передавать будем аргументы
    console.log(text);
}

showFirstMessage('Hello World!');

// как ведут себя переменные внутри функций?
let num = 20;

function showFirstMessage (text) { // в скобках ПАРАМЕТРЫ, а передавать будем аргументы
    console.log(text);
    let num = 10;
    return 77;
}

// showFirstMessage('Hello!');

// console.log(num);
console.log(showFirstMessage('Hello!'));

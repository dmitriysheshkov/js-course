'use strict';

// Интерполяция строк - процесс замены заполнителей в строке значениями строковой переменной

const category = 'gadgets';

// !!! Работает только, если строка заключена в косые кавычки.
const url = `https://website.com/${ category }/phones`;

console.log(url);
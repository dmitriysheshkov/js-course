'use strict';

// Классификация типов данных в JS
// В JS всего восемь типов данных:

// ПРОСТЫЕ (примитивы):
// 1. ЧИСЛА (number) - целые и дробные, от -2в53ст, до 2в53ст (состоящее из 16 цифр)
// 2. ЦЕЛЫЕ ЧИСЛА ПРОИЗВОЛЬНОЙ ДЛИНЫ (BigInt)
// 3. СТРОКИ (string)
// 4. ЛОГИЧЕСКИЕ (boolean) - для true/false
// 5. null - для неизвестных значений – отдельный тип, имеющий одно значение null.
// 6. undefined - для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// 7. symbol - для уникальных идентификаторов.

// 8. ОБЪЕКТЫ (сложные типы данных):
//  - сами объекты {}
//  - массивы []
//  - функции function() {}
//  - объект даты Date
//  - регулярные выражения
//  - ошибки

// 1. ЧИСЛА
let number = 5;
// числа (целые и дробные)
// + специальные числовые значения: Infinity (например, при делении на ноль)
console.log(4/0);
// и NaN - not a number - возникает когда мы проводим операцию, которая не подлежит
// математической логике, например, при сложении строки и числа.
console.log('string' * 5);

// 2. ЦЕЛЫЕ ЧИСЛА ПРОИЗВОЛЬНОЙ ДЛИНЫ (BigInt)
// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// 3. СТРОКИ
// С кавычками (двойными или одинарными, а также специальными ` - где тильда)
// 
let string = 'Строка'; // строка

// 4. БУЛЕВЫЕ, ЛОГИЧЕСКИЕ ЗНАЧЕНИЯ
let boolian = true; // true or false

// 5. null; - это, когда в коде чего-то просто не существует
// например:
// console.log(something);
// будет ошибка, т.к. это ссылка на несуществующую вещь

// 6. undefined; - это, когда какой-то объект уже существует, но значения не имеет
// например:
let something;
console.log(something); // будет ошибка undefined

// 7. Символ
let sym = Symbol();


// 8. ОБЪЕКТЫ - это коллекция данных
let persone = { // в фигурных скобках
    name: 'Вася', // свойства объекта (или методы, если функция)
    age: 23, // свойство (или поле объекта)- это пара - ключ(или имя):значение
    isMarried: false,
    'eye color': 'brown', // имя свойства может состоять из нескольких слов,
    // тогда его нужно заключать в кавычки и доступ только через []
    // последнее свойсвто может заканчиваться запятой
    // такая запятая называется "висячей"
};
// чтобы добраться до значения определённого свойства,
// мы можем воспользоваться либо точкой:
console.log(persone.name);
// либо квадратными скобками [], нарпимет для свойсв,
// ключ которых состоит из нескольких слов:
console.log(persone['eye color']); // обязательно в кавычках

// массив - это разновидность объектов для хранения упорядоченных данных,
// которые заключаются в квадратные данные:
let array = ['plum.png', 'orange.jpg', 'apple.png'];
// в массиве могут быть разные типы данных одновременно: числа, строки
// объекты, функции...
// добраться до данных массива можно через квадратные скобки и порядковый
// номер элемента, начиная с ноля
console.log(array[0]);

// Оператор TYPEOF
// Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.

// У него есть два синтаксиса:
// Синтаксис оператора: typeof x.
// Синтаксис функции: typeof(x).
// Другими словами, он работает со скобками или без скобок. Результат одинаковый.

// Вызов typeof x возвращает строку с именем типа:
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof "foo" // "string"
typeof true // "boolean"
typeof Symbol("id") // "symbol"
typeof Math // "object" 
/* Math – это встроенный объект, который предоставляет 
математические операции и константы. Здесь он служит лишь примером объекта.*/
typeof null // "object"
/*Результатом вызова typeof null является "object". Это неверно. 
Это официально признанная ошибка в typeof, сохранённая для совместимости. 
Конечно, null не является объектом. Это специальное значение с отдельным 
типом. Повторимся, это ошибка в языке*/
typeof alert // "function"
/*Вызов typeof alert возвращает "function", потому что alert является 
функцией. Мы изучим функции в следующих главах, где заодно увидим, что 
в JavaScript нет специального типа «функция». Функции относятся к 
объектному типу. Но typeof обрабатывает их особым образом, возвращая 
"function". Формально это неверно, но очень удобно на практике.*/
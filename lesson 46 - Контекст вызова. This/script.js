'use strict';

// В JavaScript this — это текущий контекст исполнения функции.

// Поскольку функцию можно вызвать четырьмя способами:
// вызов функции: alert('Hello World!'),
// вызов метода: console.log('Hello World!'),
// вызов конструктора: new RegExp('\\d'),
// непрямой вызов: alert.call(undefined, 'Hello World!'),
// и каждый из них определяет свой контекст, поведение this слегка не соответствует ожиданиям начинающих разработчиков.

// Кроме того, strict mode также влияет на контекст исполнения.

// продолжение статьи здесь: https://tproger.ru/translations/javascript-this-keyword/

// 1. Обычная функция - не важно где вызывается: this = window (глобальный объект), но, если 'use strict', то undefined

function showThis1() {
    console.log(this);
}
showThis1();

function showThis2(a, b) {
    console.log(a, b, this);
    function getSum() {
        console.log(a, b, this);
        return a + b;
    }
    getSum();
}
showThis2(3, 2);

// 2. Контекст у методов объекта - сам объект. 
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); // здесь контекст - сам объект

        function shout() {
            console.log(this); // здесь контекст - undefined (или window, если без 'use strict'), потому что это не метод, а просто функция внутри объекта
        }
    }
};
obj.sum();

// 3. This в консрукторах и классах - это новый экземпляр объекта
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.helloMessage = function() {
        console.log(`Hello ${ this.name } ! Твой ID ${this.id}`);
    };
    console.log(this); // this = объект dima
}
const dima = new User('Dima', 79);

dima.helloMessage();

// 4. Ручная привязка this любой функции помощью методов: call(), apply()
// а также bind()
function sayName(specialty) {
    console.log(this);
    console.log(`Привет ${specialty} ${this.name} ${this.surname}`);
}

const user = {
    name: 'Dima',
    surname: 'Sheshkov'
};

// эти методы одинаковые по своему функционалу, различие только в синтаксисе передачи дополнительных аргуметов (если есть)
sayName.call(user, 'programmer'); // здесь аргументы передаём в кавычках через запятую
sayName.apply(user, ['programmer']);// здесь аргументы передаём в массиве, через запятую

// а вот метод bind() создаёт новую функцию - пример:
function count(num) {
    return this*num;   // здесь this undefined (или window, если без 'use strict')
}

const double = count.bind(2); // создаётся новая функция double такая же, как count, но уже с аргументом 2
console.log(double(5)); // вызываем новую функцию double, в которой this будет равен 5

// 5. this в обработчиках событий

const btn = document.querySelector('button');

// 5.1 обработчик с обычной функцией - контекстом будет сам элемент, на котором произошло событие
btn.addEventListener('click', function() {
    console.log(this);
});

// 5.2 обработчик со стрелочной функцией
// стрелочная функция не имеет своего контекста, она всегда берёт контекст у своего родителя
btn.addEventListener('click', () => {
    console.log(this); // в данном случае this = window
});

// чтобы сохранить правильную работу в срелочные функции, нам нужно передать event (e) и через target, убрав this
btn.addEventListener('click', (e) => {
    console.log(e.target); // в данном случае target - это наша кнопка
});

// стрелочную функцию можем переписать в укороченном виде? т.к. тело функции состоит из одной строки. У (e) можем убрать скобки, т.к. аргумент всего один.
btn.addEventListener('click', e => btn.style.backgroundColor = 'tomato');
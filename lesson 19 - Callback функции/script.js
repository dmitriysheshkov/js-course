// протестируем очерёдность выполнения функций
// очерёдность объявления и вызова функций не всегда соответсвует
// очерёдности завершения их выполнения

// пример:
function first() {
    // do sumething

    setTimeout(
        function() {
            console.log('1');
        },
        500
    );
}

function second() {
    console.log('2');
}

first();
second();

// принцип Callback позволяет гарнтировать правильную последовательность
// работы разных функций вне зависимости от порядка их объявления или вызова.
// то есть, когда одна функция приступает к работе
// только тогда, когда другая функция закончила свою работу

// тот же пример, но с ожидаемой последовательностью выполнения:
// правда я убрал setTimeout т.к. с ней всё равно такая же последовательность
// ввиду того, что setTimeout - это асинхронная функция
function first(callback) {
    // do sumething

    console.log('1');

    callback();
}

function second() {
    console.log('2');
}

first(second);



// function pause(callback) {
//     console.log('Добавляю стиль');
//     setTimeout(callback, 2000);
// }

// function doIt() {
//     console.log('Удаяю стиль');
//     console.log(count++);

//     pause(doIt);
// }

// pause(doIt);

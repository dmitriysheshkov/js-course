const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    let answer = '';

    while (answer == '' || answer == null || isNaN(answer)) {
        answer = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }

    personalMovieDB.count = answer;
}

function rememberFilms() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы - классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        alert('Да Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

function detectPersonalLevel() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько оцените его?');
    
        if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
            console.log('done');
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }
}

function writeGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
    }
}

function showDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

start();

rememberFilms();

detectPersonalLevel();

writeGenres();

showDB();
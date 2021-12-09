const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы - классический зритель!');
} else if (personalMovieDB.count >= 30) {
    alert('Да Вы киноман!');
} else {
    alert('Произошла ошибка!');
}

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

// personalMovieDB.count = numberOfFilms;

console.log(personalMovieDB);
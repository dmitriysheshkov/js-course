const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let filmName = prompt('Один из последних просмотренных фильмов?');
    let filmRating = prompt('На сколько оцените его?');

    personalMovieDB.movies[filmName] = filmRating;
}

// personalMovieDB.count = numberOfFilms;

console.log(personalMovieDB);
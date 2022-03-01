 "use strict";

const numberOfFilms = prompt('Сколько фильмов уже посмотрел?', "1");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Последний фильм?", "ВоВ"),
    b = +prompt("На сколько оцените его?", "10"),
    c = prompt("Последний фильм?", "ВоВ"),
    d = +prompt("На сколько оцените его?", "10");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

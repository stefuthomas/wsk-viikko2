'use strict';

const movieAmount = parseInt(prompt("How many movies to rate?"));
const movies = [];

for (let i = 1; i <= movieAmount; i++) {
    const title = prompt("Title of the " + i + ". movie:");
    const rating = prompt("Rating of the " + i + ". movie:");
    const movie = {
        movieTitle: title,
        movieRating: rating,
        getInfo: function() {return this.movieTitle + " " + this.movieRating},
        getRating: function() {return this.movieRating},
        getTitle: function() {return this.movieTitle}
    }
    movies.push(movie);
}

movies.sort((a, b) => b.getRating() - a.getRating());

const p = document.createElement("p");
p.innerText = "Highest rated movie: " + movies[0].getTitle();

const ol = document.createElement("ol");
movies.forEach(movie => {
    const li = document.createElement("li");
    const node = document.createTextNode(movie.getInfo());
    li.appendChild(node);
    ol.appendChild(li);
});

document.body.appendChild(p);
document.body.appendChild(ol);

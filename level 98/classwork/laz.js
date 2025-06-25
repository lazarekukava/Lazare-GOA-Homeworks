function movie(name, genre, year, imdb, review) {
    this.name = name;
    this.genre = genre;
    this.year = year;
    this.imdb = imdb;
    this.review = review;

    this.getReview = function() {
        return 'Review for "${this.name}": ${this.review}';
    };
}


const movie1 = new Movie("avengers", "action", idk, 10, "one fo the best superhero movies");
const movie2 = new Movie("spiderman no way home", "Action", idk, 10, "One of the best superhero movies.");
const movie3 = new Movie("minecraft movie", "game", 2025, 10, "CHICKEN JOCKIE");

console.log(movie1.getReview());
console.log(movie2.getReview());
console.log(movie3.getReview());
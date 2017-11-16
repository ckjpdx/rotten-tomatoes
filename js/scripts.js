function Movie (title, year, rating) {
  this.title = title;
  this.year = year;
  this.rating = rating;
}
var ratingsArray = [];
var movies = [];
// FRONT
$(document).ready(function() {
  $(".userForm").submit(function(event) {
    event.preventDefault();
    var movieTitle = $("#title").val();
    var movieYear = $("#year").val();
    var movieRating = parseInt($("#rating").val());

    var movie = new Movie (movieTitle, movieYear, movieRating);
    $("tbody#tlc").append("<tr><td>" + movieTitle + "</td><td>" + movieYear + "</td><td>" + movieRating + "%" + "</td></tr>");
    movies.push(movie);
  });
  $("button#sort").click(function(){
    $("tbody#tlc").empty();
    movies.sort(function(a,b){
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
    movies.forEach(function(mov){
      $("tbody#tlc").append("<tr><td>" + mov.title + "</td><td>" + mov.year + "</td><td>" + mov.rating + "%" + "</td></tr>");
    });
  });
}); //document ready

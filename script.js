let api = "https://www.omdbapi.com/?apikey=28462748&t=";
let title = document.getElementById("title");
let director = document.getElementById("Director");
let actors = document.getElementById("actors");
let collection = document.getElementById("collection");
let desc = document.getElementById("Desc");
let award = document.getElementById("awards");
let writer = document.getElementById("writer");
let rating = document.getElementById("ratings");
let genre = document.getElementById("genre");
let date = document.getElementById("date");
let poster = document.getElementById("poster");
function searchMovie() {
  let movieName = document.getElementById("movieName");
  let query = api + movieName.value;
  let main = document.getElementById("main");
  let text = document.getElementById("text");

  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      if (data.Title == undefined) {
        text.innerText = "No Result Found";
        text.style.cssText = "margin-left:483px;font-size:16px";
        main.style.cssText = "display:none";
      } else {
        main.style.cssText = "display:block";
        text.innerText = "";
        text.style.cssText = "dispaly:none";
        title.innerText = data.Title;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        collection.innerText = data.BoxOffice;
        desc.innerText = data.Plot;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = data.imdbRating;
        genre.innerText = data.Genre;
        date.innerText = data.Released;
        poster.src = data.Poster;
      }
    });
}

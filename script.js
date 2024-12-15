//const form = document.querySelector("form")
//const movieList = document.querySelector("movie-list")
//
//form.addEventListener("submit",function(e){
//    e.preventDefault()
//    console.log(e.target)
//    const li = document.createElement("li")
//    fetch('http://localhost:3000/films')
//    .then(res => res.json())
//    .then(data => {
//        li.innerHTML = `
//        <img src= `` alt="image-1">
//        <h2>`${data.title}`</h2>
//        <p><span> `${data.runtime} ${data.capacity} ${data.showtime}`</span></p>
//        <p>`${data.description}`</p>
//        `
//    })
//
//  
//    movieList.appendChild("li")
//
//})
const filmsList = document.querySelector("#films");
const title = document.getElementById("title");
const poster = document.getElementById("poster");
const runtime = document.getElementById("runtime");
const showtime = document.getElementById("showtime");
const tickets = document.getElementById("tickets");
const buyTicket = document.getElementById("buy");

let currentFilmTickets = 0;

// Fetch and display film list
fetch('http://localhost:3000/films')
  .then(res => res.json())
  .then(films => {
    films.forEach(film => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="card">
          <img src="${film.poster}" alt="${film.title}">
          <h3>${film.title}</h3>
          <p>${film.description}</p>
        </div>
      `;
      li.classList.add("item");
      li.addEventListener("click", () => {
        showFilmDetails(film);
      });
      filmsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Error fetching list:", error);
  });

// Display selected film details
function showFilmDetails(film) {
  title.textContent = film.title;
  poster.src = film.poster;
  runtime.textContent = film.runtime;
  showtime.textContent = film.showtime;
  currentFilmTickets = film.capacity - film.tickets_sold;
  tickets.textContent = currentFilmTickets;
}

// Handle ticket purchase
buyTicket.addEventListener("click", () => {
  if (currentFilmTickets > 0) {
    currentFilmTickets -= 1;
    tickets.textContent = currentFilmTickets;

    if (currentFilmTickets === 0) {
      alert("This showing is sold out!");
    }
  } else {
    alert("Sorry, no tickets available!");
  }
});

// Tangkap input searching
const inputButton = document.querySelector(".input-button");
inputButton.addEventListener("click", () => {
  const searchInput = document.querySelector(".form-control");
  getDataMovies(searchInput.value);
});

// Ambil data dari api sesuai input searching
function getDataMovies(keyword) {
  fetch(`http://www.omdbapi.com/?apikey=3a352860&s=${keyword}`)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((movie) => (cards += showCards(movie)));
      const movieField = document.querySelector(".movie-field");
      movieField.innerHTML = cards;

      // Tampilkan detail film dengan modal
      const detailButton = document.querySelectorAll(".movie-detail-button");
      detailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          fetch(
            `http://www.omdbapi.com/?apikey=3a352860&i=${this.dataset.imdbid}`
          )
            .then((respone) => respone.json())
            .then((movie) => {
              let modal = showModal(movie);
              const detailField = document.querySelector(".detail-field");
              detailField.innerHTML = modal;
            });
        });
      });
    })
    .catch((response) => console.log(response));
}

// Cards
const showCards = (movie) => {
  return `<div class="col-md-4 my-3 d-flex align-items-stretch">
            <div class="card">
                <img src="${movie.Poster}" class="card-img-top"/>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${movie.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                    <button type="button" class="btn btn-primary mt-auto movie-detail-button" data-bs-toggle="modal" data-bs-target="#movie-detail" data-imdbId="${movie.imdbID}">Movie Details</button>
                </div>
            </div>
        </div>`;
};

// Modal
const showModal = (movie) => {
  return `<div class="col-md-3">
                <img src="${movie.Poster}" class="img-fluid" />
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${movie.Title}</h4></li>
                    <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                    <li class="list-group-item"><strong>Writers : </strong>${movie.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong>${movie.Plot}</li>
                </ul>
            </div>`;
};

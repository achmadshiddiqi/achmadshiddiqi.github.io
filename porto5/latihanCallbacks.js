// Tangkap input searching
const inputButton = document.querySelector(".input-button");
inputButton.addEventListener("click", async () => {
  const searchInput = document.querySelector(".form-control");
  const movies = await getDataMovies(searchInput.value);
  updateUI(movies);
});

// Ambil data dari api sesuai input searching
function getDataMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=3a352860&s=${keyword}`)
    .then((response) => response.json())
    .then((response) => response.Search)
    .catch((response) => console.log(response));
}

// Ambil data detail movie sesuai imdbid saat tombol detail diklik
function getMovieDetail(imdbid) {
  return fetch(`http://www.omdbapi.com/?apikey=3a352860&i=${imdbid}`)
    .then((respone) => respone.json())
    .then((movie) => movie);
}

// Update UI
function updateUI(movies) {
  let cards = "";
  movies.forEach((movie) => (cards += cardHTML(movie)));
  const movieField = document.querySelector(".movie-field");
  return (movieField.innerHTML = cards);
}

// Update UI Detail
function updateUIDetail(movie) {
  let modal = modalHTML(movie);
  const detailField = document.querySelector(".detail-field");
  return (detailField.innerHTML = modal);
}

// Event binding pada tombol detail
// karena event sudah dijalankan saat detail button belum terbuat
document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("movie-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

// Cards
const cardHTML = (movie) => {
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
const modalHTML = (movie) => {
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

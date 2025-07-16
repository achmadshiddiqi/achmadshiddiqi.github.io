// Objek porto
const portfolio = [
  {
    image: "img/thumbs/7.png",
    text: "This is a website that i made with my friend as the UI/UX designer, check it out!",
    href: "porto1/page1.html",
  },
  {
    image: "img/thumbs/8.png",
    text: "I made this one from Sandhika Galih's youtube tutorial video.",
    href: "porto2/port2.html",
  },
  {
    image: "img/thumbs/9.jpeg",
    text: "This is a website landing page that i made based on my friend's design.",
    href: "porto3/port3.html",
  },
  {
    image: "img/thumbs/10.jpeg",
    text: "I made this one in a college group project as a programmer.",
    href: "https://kelompok5pmsi.github.io/",
  },
  {
    image: "img/thumbs/11.png",
    text: "Suwit Jawa game developed with JavaScript DOM and a lil bit of html and css.",
    href: "porto4/suwit-jawa.html",
  },
  {
    image: "img/thumbs/12.png",
    text: "Movie-Searching Web developed with bootstrap & javascript by fetching data from OMDb API.",
    href: "porto5/latihan-callbacks.html",
  },
  {
    image: "",
    text: "Mobile-based web e-learning application developed with html and css",
    href: "porto6/index.html",
  },
];

// Menampilkan Portofolio Cards
let cards = "";
portfolio.forEach((porto) => {
  cards += `<div class="col-md-4 d-flex mt-5">
                <div class="card">
                  <img src="${porto.image}" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">
                      ${porto.text}
                    </p>
                    <a href="${porto.href}" class="btn btn-primary mt-auto"
                      >See my work</a
                    >
                  </div>
                </div>
              </div>`;
});
$(".porto-field").html(cards);

// const porto1 = new Portfolio(
//   "img/thumbs/7.png",
//   "This is a website that i made with my friend as the UI/UX designer, check it out!",
//   "porto1/page1.html"
// );
// const porto2 = new Portfolio(
//   "img/thumbs/8.png",
//   "I made this one from Sandhika Galih's youtube tutorial video.",
//   "porto2/port2.html"
// );
// const porto3 = new Portfolio(
//   "img/thumbs/9.jpeg",
//   "This is a website landing page that i made based on my friend's design.",
//   "porto3/port3.html"
// );
// const porto4 = new Portfolio(
//   "img/thumbs/10.jpeg",
//   "I made this one in a college group project as a programmer.",
//   "https://kelompok5pmsi.github.io/"
// );
// const porto5 = new Portfolio(
//   "img/thumbs/11.png",
//   "Suwit Jawa game developed with JavaScript DOM and a lil bit of html and css.",
//   "porto4/suwit-jawa.html"
// );
// const porto6 = new Portfolio(
//   "img/thumbs/12.png",
//   "Movie-Searching Web developed with bootstrap & javascript by fetching data from OMDb API.",
//   "porto5/latihan-callbacks.html"
// );

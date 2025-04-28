// Menangkap pilihan komputer
// Generate bilangan random
const pilihanKomputer = () => {
  const comp = Math.random();

  if (comp < 0.34) return "orang";
  if (comp < 0.67 && comp > 0.34) return "gajah";
  return "semut";
};

// Bikin aturan mainnya
const aturanMain = (comp, p) => {
  if (p == comp) return "SERI!";
  if (p == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (p == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (p == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
};

// Bikin method buat ganti img komputer sesuai pilihan
const gantiImgKomputer = (pilihan) => {
  const imgKomputer = document.querySelector(".img-komputer");
  if (pilihan === "gajah") {
    imgKomputer.setAttribute("src", "img/gajah.png");
  }
  if (pilihan === "orang") {
    imgKomputer.setAttribute("src", "img/orang.png");
  }
  if (pilihan === "semut") {
    imgKomputer.setAttribute("src", "img/semut.png");
  }
};

// Cari tombol
const tombolPilihan = document.querySelectorAll("li img");
// const orang = document.querySelector(".orang");
// const semut = document.querySelector(".semut");

// Bikin method saat tombol diklik
tombolPilihan.forEach((pilihan) => {
  pilihan.addEventListener("click", () => {
    // Ambil pilihan komputer & player
    const pKomputer = pilihanKomputer();
    const pPlayer = pilihan.className;
    // Animasi acak komputer
    const animasiAcak = setInterval(() => {
      gantiImgKomputer(pilihanKomputer());
    }, 50);
    const stopAnimasi = setTimeout(() => {
      clearInterval(animasiAcak);
      // Ganti img komputer
      gantiImgKomputer(pKomputer);
      // Ambil hasilnya
      const hasil = aturanMain(pKomputer, pPlayer);
      // Cari area info
      const info = document.querySelector(".area-info");
      // Tampilkan hasilnya di info
      info.innerHTML = hasil;
    }, 1000);
  });
});

// // Orang
// orang.addEventListener("click", () => {
//   // Cari area info
//   const info = document.querySelector(".area-info");
//   // Kosongin inner HTML info
//   info.innerHTML = "";
//   // Ambil pilihan masing-masing
//   const pKomputer = pilihanKomputer();
//   const pPlayer = orang.className;
//   // Ganti img komputer
//   gantiImgKomputer(pKomputer);
//   // Jalankan aturan main
//   const teksInfo = document.createTextNode(aturanMain(pKomputer, pPlayer));
//   info.appendChild(teksInfo);
// });

// // Semut
// semut.addEventListener("click", () => {
//   // Cari area info
//   const info = document.querySelector(".area-info");
//   // Kosongin inner HTML info
//   info.innerHTML = "";
//   // Ambil pilihan masing-masing
//   const pKomputer = pilihanKomputer();
//   const pPlayer = semut.className;
//   // Ganti img komputer
//   gantiImgKomputer(pKomputer);
//   // Jalankan aturan main
//   const teksInfo = document.createTextNode(aturanMain(pKomputer, pPlayer));
//   info.appendChild(teksInfo);
// });

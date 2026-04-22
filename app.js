const books = [
  {
    title: "The IMO Compendium",
    desc: "Kumpulan soal International Mathematical Olympiad paling lengkap di dunia.",
    link: "https://www.imocompendium.info/",
    img: "https://share.google/GmkpfBzUFRwedQe0l"
  },
  {
    title: "Euclidean Geometry in Mathematical Olimpiade",
    desc: "Buku legendaris karya Chen & Siegman untuk materi Geometri olimpiade.",
    link: "http://index-of.co.uk/Geometry/Euclidean%20Geometry%20in%20Mathematical%20Olympiads.pdf",
    img: "https://share.google/S6trGm8bxeVKjH7qb"
  },
  {p
    title: "Elementary Number Theory",
    desc: "Dasar-dasar teori bilangan yang wajib dikuasai untuk tingkat kabupaten/provinsi.",
    link: "https://archive.org/details/elementarynumber0000unse",
    img: "https://share.google/n7FDJvZcL4v9esSE0"
  },
  {
    title: "Problem-Solving Strategies",
    desc: "Strategi menghadapi soal-soal sulit oleh Arthur Engel.",
    link: "https://archive.org/details/ArthurEngelProblemSolvingStrategies",
    img: "https://share.google/aFsthdhv8bXbdBiWb"
  }
];

const videos = [
  {
    title: "Aljabar Kreatif ala Kak Bho",
    youtube: "https://youtube.com/playlist?list=PL0rDA40Dh8yt-QVpmgFg6TSIkDpewvGQp&si=P-4BeZkr-9LkqIWN"
  },
  {
    title: "Pembahasan OSN-P SMA 2024",
    youtube: "https://youtube.com/playlist?list=PLFY-JQuMZwSV4Vx9xgO0nHXely1ZrTCkf&si=MXos_79P-eadGQwB"
  },
  {
    title: "Pembahasan Soal KTOM Juni 2025"
    youtube: "https://youtube.com/playlist?list=PLqDf4PEYK1oDK9GHjiDHuImKQRPuUX2i8&si=-exx8Ho3sThHvstU"
  }
];

const bGrid = document.getElementById("books-grid");
const vGrid = document.getElementById("videos-grid");

// Render Buku dengan gambar asli
books.forEach(b => {
  bGrid.innerHTML += `
    <div class="card">
      <div class="card-img-container">
        <img src="${b.img}" alt="${b.title}" onerror="this.src='https://via.placeholder.com/400x600?text=No+Cover'">
      </div>
      <div class="card-body">
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <a href="${b.link}" target="_blank" class="button">Lihat Dokumen</a>
      </div>
    </div>
  `;
});

// Render Video
videos.forEach(v => {
  vGrid.innerHTML += `
    <div class="card">
      <div class="card-body">
        <h3>${v.title}</h3>
        <iframe width="100%" height="200" src="${v.youtube}" frameborder="0" allowfullscreen style="border-radius:10px"></iframe>
      </div>
    </div>
  `;
});

const books = [
  {
    title: "The IMO Compendium",
    desc: "Kumpulan soal International Mathematical Olympiad paling lengkap di dunia.",
    link: "https://www.imocompendium.info/",
    img: "https://covers.openlibrary.org/b/id/8316124-L.jpg"
  },
  {
    title: "Euclidean Geometry",
    desc: "Buku legendaris karya Chen & Siegman untuk materi Geometri olimpiade.",
    link: "http://index-of.co.uk/Geometry/Euclidean%20Geometry%20in%20Mathematical%20Olympiads.pdf",
    img: "https://covers.openlibrary.org/b/id/12644485-L.jpg"
  },
  {
    title: "Elementary Number Theory",
    desc: "Dasar-dasar teori bilangan yang wajib dikuasai untuk tingkat kabupaten/provinsi.",
    link: "https://archive.org/details/elementarynumber0000unse",
    img: "https://covers.openlibrary.org/b/id/10540821-L.jpg"
  },
  {
    title: "Problem-Solving Strategies",
    desc: "Strategi menghadapi soal-soal sulit oleh Arthur Engel.",
    link: "https://archive.org/details/ArthurEngelProblemSolvingStrategies",
    img: "https://covers.openlibrary.org/b/id/282772-L.jpg"
  }
];

const videos = [
  {
    title: "Pembahasan Soal AIME",
    youtube: "https://www.youtube.com/embed/5_fW_9YfIhk"
  },
  {
    title: "Teknik Kombinatorika Dasar",
    youtube: "https://www.youtube.com/embed/Z0XAn99R9sU"
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

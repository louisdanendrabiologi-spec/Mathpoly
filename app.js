// Data Buku dengan Link Olimpiade Asli (Contoh Sumber Terpercaya)
const books = [
  {
    title: "OSN Informatika/Matematika",
    desc: "Persiapan teknis dan logika dasar untuk kompetisi sains nasional.",
    link: "https://osn.id/arsip",
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "AIME Problems Set",
    desc: "Koleksi soal American Invitational Mathematics Examination.",
    link: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Combinatorics - Guichard",
    desc: "E-book mendalam tentang teknik menghitung dan multiset.",
    link: "https://www.whitman.edu/mathematics/combinatorics_online/combinatorics.pdf",
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "IMO Shortlist",
    desc: "Daftar soal kandidat International Mathematical Olympiad.",
    link: "https://www.imo-official.org/problems.aspx",
    img: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=400"
  }
];

const videos = [
  {
    title: "Trik Cepat Teori Bilangan",
    youtube: "https://www.youtube.com/embed/sN_v20I1P7o" // Ganti ID video aslimu di sini
  },
  {
    title: "Geometri Olimpiade Dasar",
    youtube: "https://www.youtube.com/embed/8v_6YIu2zGk" 
  }
];

const booksContainer = document.getElementById("books");
const videosContainer = document.getElementById("videos");

// Render Buku
books.forEach(book => {
  booksContainer.innerHTML += `
    <div class="card">
      <img src="${book.img}" alt="${book.title}" class="card-image">
      <div class="card-content">
        <h3>${book.title}</h3>
        <p>${book.desc}</p>
        <a class="button" href="${book.link}" target="_blank">Unduh Modul</a>
      </div>
    </div>
  `;
});

// Render Video
videos.forEach(video => {
  videosContainer.innerHTML += `
    <div class="card">
      <div class="card-content">
        <h3>${video.title}</h3>
        <iframe width="100%" height="180"
          src="${video.youtube}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;
});

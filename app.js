// =======================
// 📚 DATA BUKU (EDIT DI SINI)
// =======================
const books = [
  {
    title: "ABT Jogja",
    desc: "Modul olimpiade matematika Indonesia",
    link: "https://example.com/abt.pdf"
  },
  {
    title: "EGMO Problems",
    desc: "Soal European Girls Math Olympiad",
    link: "https://example.com/egmo.pdf"
  },
  {
    title: "IMO Compendium",
    desc: "Kumpulan soal IMO lengkap",
    link: "https://example.com/imo.pdf"
  }
]

// =======================
// 🎥 DATA VIDEO (EDIT DI SINI)
// =======================
const videos = [
  {
    title: "Aljabar Dasar OSN",
    youtube: "https://www.youtube.com/embed/VIDEO_ID"
  },
  {
    title: "Number Theory Intro",
    youtube: "https://www.youtube.com/embed/VIDEO_ID"
  }
]

// =======================
// RENDER
// =======================

const booksContainer = document.getElementById("books")
const videosContainer = document.getElementById("videos")

books.forEach(book => {
  booksContainer.innerHTML += `
    <div class="card">
      <h3>${book.title}</h3>
      <p>${book.desc}</p>
      <a class="button" href="${book.link}" target="_blank">Buka PDF</a>
    </div>
  `
})

videos.forEach(video => {
  videosContainer.innerHTML += `
    <div class="card">
      <h3>${video.title}</h3>
      <iframe width="100%" height="150"
        src="${video.youtube}"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  `
})

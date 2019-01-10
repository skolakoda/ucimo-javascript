// TODO: prikaciti za HTML, dodati input i dugme
// BONUS: probati sopstveno filtriranje preko for petlje

let kriterij = ''  // povezati sa input poljem
let originalniNiz // bice popunjen kad stignu podaci
let noviNiz = [] // prikazivati na ekranu, to su rezultati pretage

fetch('https://baza-filmova.herokuapp.com/filmovi/')
  .then(response => response.json())
  .then(data => originalniNiz = data)

// da se poziva na neki dogadjaj
function filtriraj() {
  noviNiz = originalniNiz.filter(function(film) { 
    return film.naziv.toLowerCase().includes(kriterij.toLowerCase())
  })
  // renderovati rezultat pretrage u HTML
}
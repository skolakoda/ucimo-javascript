function toHtml(data) {
  return data.map(film => (`
    <div class="film">
      <h3>${film.naziv}</h3>
      <img src="${film.slika}" alt="${film.naziv}">
      <p>Godina: ${film.godina}</p>
    </div>
  `)).join('')
}

function render(s, html) {
  document.querySelector(s).innerHTML = html
}

fetch('https://baza-filmova.herokuapp.com/filmovi/')
  .then(response => response.json())
  .then(data => render('#okvir', toHtml(data)))
const okvir = document.querySelector('#okvir')
const http = new XMLHttpRequest()

http.open("GET", "https://baza-filmova.herokuapp.com/filmovi/")
http.send()
http.onload = () => init(http.responseText)

function init(data) {
  const filmovi = JSON.parse(data)
  let html = ''
  for (let i = 0; i < filmovi.length; i++) {
    html += `
    <div class="film">
      <h3>${filmovi[i].naziv}</h3>
      <img src="${filmovi[i].slika}" alt="${filmovi[i].naziv}">
      <p>Godina: ${filmovi[i].godina}</p>
    </div>
    `
  }
  okvir.insertAdjacentHTML('beforeend', html)
}

const okvir = document.querySelector('#preview')
const slika = document.querySelector('#slika')

slika.addEventListener('input', function (e) {
  okvir.innerHTML = `<img src="${e.target.value}">`
})

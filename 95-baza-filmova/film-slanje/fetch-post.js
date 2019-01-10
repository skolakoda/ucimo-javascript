const forma = document.querySelector('form')
const {naziv, godina, slika} = forma.elements // izvlaci elemente iz forme

forma.addEventListener('submit', (e) => {
  e.preventDefault()

  const podaci = {
    naziv: naziv.value,
    godina: godina.value,
    slika: slika.value
  }

  fetch('https://baza-filmova.herokuapp.com/dodaj-film', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(podaci)
    })
    .then(res => res.text())
    .then(res => console.log(res))

})

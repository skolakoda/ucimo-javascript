fetch('https://baza-filmova.herokuapp.com/obrisi-film/', {
  method: 'delete',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({id: '5bdb2fc70f0a326f856c0e65'})
})
  .then(response => response.text())
  .then(text => console.log(text))

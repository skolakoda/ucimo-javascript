const broj = Math.ceil(Math.random() * 100)
let unos = Number(prompt('Pogodi broj u rasponu od 1 do 100'))

while (broj != unos) {
  const poruka = broj > unos ? 'Broj je veci. ' : 'Broj je manji. '
  unos = Number(prompt(poruka + 'Pokusaj ponovo.'))
}

alert('Bravo, pogodio si! Broj je ' + broj)
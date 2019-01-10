const osoba = {
  ime: 'John',
  prezime: 'Lennon',
  starost: 25
}

for (const svojstvo in osoba) {
  console.log(osoba[svojstvo])
}

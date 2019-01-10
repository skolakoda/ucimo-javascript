const korisnici = ['Milan', 'Mladen', 'Ivana', 'Marija', 'Selena', 'Haris', 'Ivan', 'Jura']

for (let i = 0; i < korisnici.length; i++) {
  console.log(i)
  if (korisnici[i] == 'Mladen') {
    console.log('Korisnik je pronadjen.')
    break
  }
}

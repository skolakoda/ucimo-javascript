const korisnici = ['Milan', 'Mladen', 'Ivana', 'Marija', 'Selena', 'Haris', 'Ivan', 'Jura']

for (let i = 0; i < korisnici.length; i++) {
  if (korisnici[i] == 'Mladen') continue
  console.log(korisnici[i])
}

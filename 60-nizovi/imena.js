const imena = ["dajana", "marija", "damjan", "mirko", "ana", "mirko", "dajana", "milena", "darko"]

for (let i = 0; i < imena.length; i++) {
  console.log(imena[i])
  console.log(i)
}

imena.map(function(ime, i) {
  console.log(ime)
  console.log(i)
})

imena.map((ime, i) => {
  console.log(ime)
  console.log(i)
})

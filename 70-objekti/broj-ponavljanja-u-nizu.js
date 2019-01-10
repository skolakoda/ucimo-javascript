const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]

const recnik = {}

imena.map(ime => {
  if (recnik[ime]) recnik[ime]++
  else recnik[ime] = 1
})

console.log(recnik)

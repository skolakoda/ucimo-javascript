const imena = ["dajana", "marija", "damjan", "mirko", "ana", "mirko", "dajana", "milena", "darko"]
const trazenoIme = prompt("Unesi ime")
let nadjeno = false

for (let i = 0; i < imena.length; i++) {
  if (imena[i] === trazenoIme) nadjeno = true
}

if (nadjeno) console.log("Nasli smo ime: " + trazenoIme)
else console.log("Nismo nasli ime")

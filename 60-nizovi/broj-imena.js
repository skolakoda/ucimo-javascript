const imena = ["dajana", "marija", "damjan", "mirko", "ana", "mirko", "dajana", "milena", "darko"]
const trazenoIme = prompt("Unesi ime")
let nadjeno = 0

for (let i = 0; i < imena.length; i++) {
  if (imena[i] === trazenoIme) nadjeno ++
}

if (nadjeno) 
  console.log("Trazeno ime je nadjeno: " + nadjeno + " puta")
else 
  console.log("Nije nadjeno.")

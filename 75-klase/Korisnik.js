// klasa je kalup za nove objekte

class Korisnik {
  constructor(ime, prezime, visina) {
    this.ime = ime
    this.prezime = prezime
    this.visina = visina
  }

  pozdravi() {
    console.log("Zdravo, ja sam " + this.ime)
  }
}

// instance su novi objekti napravljeni na osnovu klase
const ana = new Korisnik("Ana", "Devic", "178")
const dordje = new Korisnik("Dordje", "Devic", "188")
const marija = new Korisnik("Marija", "Dordjevic", "160")
const petar = new Korisnik("Petar", "Petrovic", "180")

// dodajemo metodu instanci
petar.hodaj = function () {
  console.log('Hodam')
}

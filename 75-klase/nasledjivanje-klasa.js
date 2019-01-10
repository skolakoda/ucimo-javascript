class Junak {
  constructor(ime) {
    this.ime = ime
    this.energija = 100
  }
  
  pozdrav() {
    console.log(`Moje ime je ${this.ime}`)
  }
  
  napadni(neprijatelj) {
    neprijatelj.energija -= 5
    if (neprijatelj.energija <= 0) console.log('Neprijatelj je mrtav.')
  }
}

class Ork extends Junak {
  leti() {
    console.log('letim')
  }
}

class Covek extends Junak {
  hodaj() {
    console.log('hodam')
  }
}

class Vilenjak extends Junak {
  pozdrav() {
    console.log(`Hmnjs jssj ah ${this.ime}`)
  }
}

const ork1 = new Ork('Juruk')
ork1.pozdrav()

const ork2 = new Ork('Grrr')
ork2.pozdrav()

const covek1 = new Covek('Boromir')
covek1.pozdrav()
covek1.hodaj()

const vilenjak1 = new Vilenjak('Legolas')
vilenjak1.pozdrav()

ork1.napadni(vilenjak1)
console.log(vilenjak1.energija)

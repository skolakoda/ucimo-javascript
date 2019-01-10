class Frizider {
  
  constructor(marka, vlasnik) {
    this.marka = marka
    this.vlasnik = vlasnik
    this.reset()
  }
  
  reset() {
    this.kapacitetJaja = 10
    this.brojJaja = 5
    this.pametan = true
  }

  trenutnoStanje() {
    return this.brojJaja
  }

  izvadiJaje() {
    this.brojJaja--
    console.log("Obicna metoda je pozvana")
  }

  dopuniJaja() {
    const fali = this.kapacitetJaja - this.brojJaja
    this.brojJaja += fali
    console.log('Trenutno fali', fali, 'jaja, dopunjavam...');
  }
}

class PametniFrizider extends Frizider {
  constructor(marka, vlasnik) {
    super(marka, vlasnik)
    this.sat = Date.now()
    this.modelKompjutera = "Android"
  }
  
  izvadiJaje () {
    super.izvadiJaje()
    console.log("Pametna metoda je pozvana")
  }
}

const friz = new PametniFrizider("Gorenje", "ja")
friz.izvadiJaje()

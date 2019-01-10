/* OBJEKAT ZA MODELOVANJE PREDMETA STVARNOG SVETA */

const kola = {
  naziv: "Jugo",
  model: "45",
  brzina: 0,
  maxBrzina: 45,
  vlasnik: "Mirko Đorđević",
  boja: "#ff0000",
  brojVrata: 2,

  kreni() {
    this.brzina = 10
  },

  ubrzaj() {
    if (this.brzina >= this.maxBrzina) return
    this.brzina++
    console.log("Ubrzao sam na", kola.brzina)
  },

  stani() {
    this.brzina = 0
  },

  jelIde() {
    return this.brzina > 0
  }
}

kola.kreni()
kola.ubrzaj()

const porez = 0.2
const zakup = 200
const nabavkaPica = 2000
const radnici = 600
const brojGostijuPoDanu = 30
const prosecnaPotrosnja = 4

const ukupniRashodi = zakup + nabavkaPica + radnici
const dnevniPazar = brojGostijuPoDanu * prosecnaPotrosnja
const mesecniPazar = dnevniPazar * 30
const pazarSaPorezom = mesecniPazar - mesecniPazar * porez

const bilans = pazarSaPorezom - ukupniRashodi
console.log(bilans)

/* OBJEKAT KAO ASOCIJATIVNI NIZ */

// par ključeva i vrednosti
const recnik = {
  nebo: "Nebo je plavo",
  zemlja: "Zemlja je okrugla, ili možda ravna.",
  "veliko sunce": "Sunce je zaista veliko.",
  ђак: "Onaj koji ide u školu",
  sdflkjlk5j65654243lklk34j34: "Korisnik taj i taj"
}

// console.log(recnik.ђак)

for (const kljuc in recnik) {
  console.log(kljuc + ": " + recnik[kljuc])
}

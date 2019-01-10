const brojevi = [22, 11, 3, 6, 7, 8, 9, 23, 4, 6, 77]
const trazeniBroj = 7

console.log(brojevi.sort())

console.log("Pocinje for: ")

for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] == trazeniBroj) {
    console.log("Nasao sam broj", trazeniBroj)
    break
  }
  console.log(brojevi[i])
}

console.log("\nPocinje map: ")

brojevi.map(broj => {
  if (broj == trazeniBroj) {
    console.log("Nasao sam broj", trazeniBroj)
    return  // ne zaustavlja iteraciju
  }
  console.log(broj)
})

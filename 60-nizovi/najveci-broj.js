const brojevi = [22, 3, 6, 7, -11, 8, -9, 23, 4, -6, 77]
let najveci = -Infinity

for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] > najveci) najveci = brojevi[i]
}

console.log(najveci)

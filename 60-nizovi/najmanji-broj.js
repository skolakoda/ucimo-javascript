const brojevi = [22, 3, 6, 7, -11, 8, -9, 23, 4, -6, 77]

let najmanji = Infinity

for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] < najmanji) najmanji = brojevi[i]
}

/*
for (let i = 0; i < brojevi.length; i++) {
  // alias
  let broj = brojevi[i]
  if (broj < najmanji) najmanji = broj
}
*/

console.log(najmanji)

// In programming, a closure is a function that retains the context in which it was created.

// sa var ne radi
function praviFunkcije(n) {
  const funkcije = []
  for (var i = 0; i < n; i++) { // isto kao da je `let i` u prethodnoj liniji
    funkcije.push(() => i)
  }
  return funkcije
}

// sa let radi
function praviFunkcije2(n) {
  const funkcije = []
  for (let i = 0; i < n; i++) {
    funkcije.push(() => i)
  }
  return funkcije
}

const funkcije = praviFunkcije(5)
const funkcije2 = praviFunkcije2(5)

for (let i = 0; i < funkcije.length; i++) {
  console.log(funkcije[i]())
}

for (let i = 0; i < funkcije2.length; i++) {
  console.log(funkcije2[i]())
}

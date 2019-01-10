function glavna(callback) {
  callback()
}

function x () {
  console.log("Ja sam kolbek x")
}

function y () {
  console.log("Ja sam kolbek y")
}

glavna(x)
glavna(y)
glavna(() => console.log("Ja sam inline funkcija"))

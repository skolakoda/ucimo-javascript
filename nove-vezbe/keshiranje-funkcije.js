function keshiraj(funkcija) {
  const keshirano = {}
  return function() {
    const kljuc = JSON.stringify(arguments)
    if (!(kljuc in keshirano)) {
      keshirano[kljuc] = funkcija.apply(null, arguments)
    }
    return keshirano[kljuc]
  }
}

const saberi = function(arg1, arg2) {
  return arg1 + arg2
}

const keshiranaFunkcija = keshiraj(saberi)

keshiranaFunkcija('foo', 'bar') // izvrsava funkciju
keshiranaFunkcija('foo', 'bar') // ne izvrsava funkciju, vraca iz kesha
keshiranaFunkcija('foo', 'baz') // izvrsava funkciju sa novim argumentima

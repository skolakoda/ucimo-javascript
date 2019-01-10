let godine = prompt('Koliko ti je godina?')

if (godine > 20) {
  console.log('Imas vise od 21 godinu, mozes uci')
}
else if (godine > 17) {
  console.log('Imas vise od 18 godina, mozes uci')
}
else if (godine > 15) {
  console.log('Ti si stariji maloletnik, mozes uci')
}
else {
  console.log('Zao nam je, ne mozes na sajt')
}

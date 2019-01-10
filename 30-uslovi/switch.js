const ime = prompt('Unesi svoje korisničko ime')

switch(ime) {
  case 'admin':
    console.log('Možeš pristupiti administratorskoj tabli.')
    break
  case 'korisnik':
    console.log('Možeš pristupiti korisničkom sajtu.')
    break
  case 'gost':
    console.log('Možeš pristupiti nekim delovima sajta.')
    break
  default:
    console.log('Nažalost, ne možeš pristupiti sajtu.')
}

const pravac = prompt('Nalaziš se u mračnoj šumi, i jure te trolovi. Sa leve strane je reka. Sa desne litica. Gore je pećina. Dole se nazire kanjon. Na koju stranu ćeš nastaviti?')

switch(pravac) {
  case 'levo':
    const preplivati = confirm('Naišao si na veliku reku. Da li ćeš pokušati da preplivaš?')
    if (preplivati) alert('Bravo, uspešno si prešao reku.')
    else alert('Mrtav si, trolovi su te uhvatili.')
    break
  case 'desno':
    const silazi = confirm('Naišao si na liticu. Da li ćeš pokušati da siđeš?')
    if (silazi) alert('Pao si niz liticu i poginuo.')
    else alert('Trolovi su projurili pored tebe. Spašen si.')
    break
  case 'gore':
    alert('Popeo si se do pećine')
    break
  case 'dole':
    alert('Sišao si u kanjon')
  default:
    alert('Nisi izabrao pravac')
}

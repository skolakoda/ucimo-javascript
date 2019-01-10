// alias funkcija

function $(selektor) {
  return document.querySelector(selektor)
}

// menjamo stil cele stranice

document.body.style.background = 'red';
document.body.style.fontSize = '1.2em';

// selektujemo pojedine elemente i menjamo ih

const naslov = document.getElementById('naslov')
naslov.innerText = 'Zdravo Zdravo'

const prazno = document.getElementById('prazno')
prazno.innerHTML = `
<div>
    <h3>Dodat naslov</h3>
    <p>Dodat pasus asdf asdflk asdfl ksdflkj </p>
    <p>Dodat pasus asdf asdflk asdfl ksdflkj </p>
    <img>
</div>
`

$('#naslov').style.color = 'green'
$('.prvi-pasus').style.color = 'yellow'
$('h3').style.color = 'purple'

// selektujemo više elemenata i stampamo ih

const pasusi = document.querySelectorAll('p')

for (let i = 0; i < pasusi.length; i++) {
  console.log(pasusi[i])
}

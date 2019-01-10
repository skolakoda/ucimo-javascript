const $ = selektor => document.querySelector(selektor)

const validnoIme = ime =>
    typeof ime == 'string' && ime.length > 0

const validanBroj = broj =>
    !isNaN(broj) && broj.length > 0

const validnaPoruka = poruka =>
    poruka.length > 0 && poruka.length <= 144


$('form').addEventListener('submit', function(e) {
    e.preventDefault()

    if (!validnoIme($('#ime').value))
      return console.log('nevalidno ime')
    if (!validanBroj($('#broj').value))
      return console.log('nevalidan broj')
    if (!validnaPoruka($('#poruka').value))
      return console.log('nevalidna poruka')

    this.submit()
})

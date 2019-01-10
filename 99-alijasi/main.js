// metoda ne vraca vrednost, dovoljan samo alias
const log = console.log

// metoda vraca vrednost, mora preko povratne funkcije
const $ = selektor => document.querySelector(selektor)

// metoda zajednička mnogim elementima, mora preko prototipa
EventTarget.prototype.on = EventTarget.prototype.addEventListener

// primer upotrebe aliasa, nalik na jQuery
$('#pasus').on('click', function() {
    log('klik')
})

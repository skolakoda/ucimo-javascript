const kutijica = document.querySelector('#kutijica')

/* POGRESNO */

// kutijica.onclick = function() {
//   console.log(1)
// }
//
// kutijica.onclick = function() {
//   console.log(2)
// }
//
// kutijica.onclick = function() {
//   console.log(3)
// }

/* ISPRAVNO */

kutijica.addEventListener('click', function() {
  console.log(1)
})

kutijica.addEventListener('click', function() {
  console.log(2)
})

kutijica.addEventListener('click', function() {
  console.log(3)
})

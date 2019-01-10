function sum(a, b) {
  return a + b
}

function addClass(el, newClass) {
  if (el.className.includes(newClass))
    return
  el.className += (el.className.length ? ' ' : '') + newClass
}

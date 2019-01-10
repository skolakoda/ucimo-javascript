let i = 0

function praviFunkciju() {
  i++
  return function () {
    return i
  }
}

function praviFunkciju2() {
  return function () {
    return i++
  }
}

const funkcija = praviFunkciju()
console.log(funkcija())
console.log(funkcija())
console.log(funkcija())

const funkcija2 = praviFunkciju2()
console.log(funkcija2())
console.log(funkcija2())
console.log(funkcija2())

function toRomanRecursive(number){
  var convert = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  var result = ''
  var angka = number

  for(var i in convert){
    if(angka >= convert[i]){
      result += i
      angka -= convert[i]
    }
  }
  if (number === 0){
    return result
  }
  return result + toRomanRecursive (angka)
}


console.log(toRomanRecursive(1453))

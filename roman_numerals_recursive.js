function toRoman (input) {
  let inputObj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    LC: 90,
    C: 100,
    CD: 400,
    D: 500,
    DM: 900,
    M: 1000,
  }
  let keys = Object.keys(inputObj)
  let hasil = ''
  
  for (let a = keys.length-1; a >= 0 ; a--) {
    if (input >= inputObj[keys[a]]) {
      hasil = keys[a] + toRoman (input-inputObj[keys[a]])
      return hasil
    }
  }
  return hasil
}
console.log(toRoman(1234))
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

// module.exports = toRoman
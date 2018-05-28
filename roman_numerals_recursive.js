function toRoman(input) {
  // start your code here

  var obj = {}
  obj['M'] = 1000
  obj['CM'] = 900
  obj['D'] = 500
  obj['CD'] = 400
  obj['C'] = 100
  obj['XC'] = 90
  obj['L'] = 50
  obj['XL'] = 40
  obj['X'] = 10
  obj['IX'] = 9
  obj['V'] = 5
  obj['IV'] = 4
  obj['I'] = 1

  for (const x in obj) {
    if (input >= obj[x]) {
      return x + toRoman(input - obj[x])
    }
  }
  return ''
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman

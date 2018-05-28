function toRoman(integer) {
  // start your code here
  let angkaRoman = [1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 900, 1000];
  let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "C", "CD", "D", "CM", "M"]
  if (integer == 0) {
    return ""
  }
  for (var i = angkaRoman.length-1; i >=0; i--) {
      if (angkaRoman[i]<=integer) {
        return roman[i]+toRoman(integer-angkaRoman[i])
      }
    }
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

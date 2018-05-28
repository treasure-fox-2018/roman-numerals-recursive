function toRoman(input) {
  // start your code here
  var number = [1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
  var romawi = ["M", "CM", "D", "CD", "C", "L", "XL","X", "IX", "V", "IV", "I"]
  var strResult = ""
  for(var i = 0; i < romawi.length; i++){
    if(input == 0){
      return ''
    }else if (input >= number[i]) {
      var inputStr = input-number[i]
      strResult += romawi[i]
      return strResult + toRoman(inputStr)
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

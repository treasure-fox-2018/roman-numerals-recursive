function toRoman(input) {
  var object = {
    'M' : 1000,
    'CM' :900,
    'D' :500,
    'CD' :400,
    'C' : 100,
    'XC' :90,
    'L' : 50,
    'XL' :40,
    'X' : 10,
    'IX' : 9,
    'V' : 5,
    'IV' : 4,
    'I' : 1
  }

  var hasil = ''
  if (input === 0) {
    return hasil;
  }
  else {
    for (var keys in object) {
      if (input >= object[keys]) {
        hasil = hasil + keys;
        return hasil + toRoman(input-object[keys])
      }
      
    }
  }
  // start your code here
  // return to_roman(input);
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


/*
function to_roman (num) {
  var object = {
     'M' : 1000,
     'CM' :900,
     'D' :500,
     'CD' :400,
     'C' : 100,
     'XC' :90,
     'L' : 50,
     'XL' :40,
     'X' : 10,
     'IX' : 9,
     'V' : 5,
     'IV' : 4,
     'I' : 1
  }
  // console.log(object.a1)
  var result = '';
  

  for (var keys in object) {
    while (num >= object[keys]) {
      result = result + keys;
      num = num - object[keys];
      
    }
  }
  return result;
}
*/
function toRoman(input) {
  var arrOfObjConversion = [
    {
      number: 1,
      roman: "I"
    },
    {
      number: 4,
      roman: "IV"
    },
    {
      number: 5,
      roman: "V"
    },
    {
      number: 9,
      roman: "IX"
    },
    {
      number: 10,
      roman: "X"
    },
    {
      number: 40,
      roman: "XL"
    },
    {
      number: 50,
      roman: "L"
    },
    {
      number: 90,
      roman: "XC"
    },
    {
      number: 100,
      roman: "C"
    },
    {
      number: 400,
      roman: "CD"
    },
    {
      number: 500,
      roman: "D"
    },
    {
      number: 900,
      roman: "CM"
    },
    {
      number: 1000,
      roman: "M"
    }
  ];
  var i = arrOfObjConversion.length - 1;
  var tempoRomanConversion = '';
  var booleanObtainValue = false;
  // console.log("start");
  // console.log(input);

  while (booleanObtainValue === false) {
    if (i !== -1) {

      // console.log(i);
      var arrayAccessNumber = arrOfObjConversion[i].number;
      var arrayAccessRoman = arrOfObjConversion[i].roman;
      var inspector = input - arrayAccessNumber;
      // console.log(inspector);
      if (inspector >= 0) {
        tempoRomanConversion += arrayAccessRoman;
        booleanObtainValue = true;
        // console.log(tempoRomanConversion);
        // console.log(tempoNumberSum);
      } else if (inspector < 0) {
        // console.log("keluar");
        i --;
        // console.log(arrayAccessNumber);
        // console.log(arrayAccessRoman);
      }
    } else {
      booleanObtainValue = true;
    }
  }
  // console.log(tempoRomanConversion);

  if (input === 0) {
    return tempoRomanConversion;
  } else {
    return tempoRomanConversion + toRoman(input -= arrayAccessNumber) ;
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

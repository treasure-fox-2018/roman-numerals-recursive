function numSatuan(num) {
  var hasilSatuan = [] 
  if (num === 1) {
    hasilSatuan.push('I')
  } else if (num === 2) {
    hasilSatuan.push('II')
  } else if (num === 3) {
    hasilSatuan.push('III')
  } else if (num === 4) {
    hasilSatuan.push('IV')
  } else if (num === 5) {
    hasilSatuan.push('V')
  } else if (num === 6) {
    hasilSatuan.push('VI')
  } else if (num === 7) {
    hasilSatuan.push('VII')
  } else if (num === 8) {
    hasilSatuan.push('VIII')
  } else if (num === 9) {
    hasilSatuan.push('IX')
  }
  return hasilSatuan
}

function numPuluhan(num) {
  var hasilPuluhan = []
  if (num === 1) {
    hasilPuluhan.push('X')
  } else if (num === 2) {
    hasilPuluhan.push('XX')
  } else if (num === 3) {
    hasilPuluhan.push('XXX')
  } else if (num === 4) {
    hasilPuluhan.push('XL')
  } else if (num === 5) {
    hasilPuluhan.push('L')
  } else if (num === 6) {
    hasilPuluhan.push('LX')
  } else if (num === 7) {
    hasilPuluhan.push('LXX')
  } else if (num === 8) {
    hasilPuluhan.push('LXXX')
  } else if (num === 9) {
    hasilPuluhan.push('XC')
  }
  return hasilPuluhan
}

function numRatusan(num) {
  var hasilRatusan = []
  if (num === 1) {
    hasilRatusan.push('C')
  } else if (num === 2) {
    hasilRatusan.push('CC')
  } else if (num === 3) {
    hasilRatusan.push('CCC')
  } else if (num === 4) {
    hasilRatusan.push('CD')
  } else if (num === 5) {
    hasilRatusan.push('D')
  } else if (num === 6) {
    hasilRatusan.push('DC')
  } else if (num === 7) {
    hasilRatusan.push('DCC')
  } else if (num === 8) {
    hasilRatusan.push('DCCC')
  } else if (num === 9) {
    hasilRatusan.push('MD')
  }
  return hasilRatusan
}

function numRibuan(num) {
  var hasilRibuan = []
  if (num === 1) {
    hasilRibuan.push('M')
  } else if (num === 2) {
    hasilRibuan.push('MM')
  } else if (num === 3) {
    hasilRibuan.push('MMM')
  } else if (num > 3) {
    return ('Number is Too Big')
  }
  return hasilRibuan
}

function toRoman (input) {
  var hasil = ''
  input = input.toString()
  if (input.length === 4) {
    var ribuan = numRibuan(Number(input[0]))
    hasil += ribuan
    input = input.slice(1)
  }
  if (input.length === 3) {
    var ratusan = numRatusan(Number(input[0]))
    hasil += ratusan
    input = input.slice(1)
  }
  if (input.length === 2) {
    var puluhan = numPuluhan(Number(input[0]))
    hasil += puluhan
    input = input.slice(1)
  }
  
  if (input.length > 1) {
    return hasil + toRoman (input)
  } else if (input.length === 1) {
    var satuan = numSatuan(Number(input[0]))
    hasil += satuan
    return hasil
  }
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
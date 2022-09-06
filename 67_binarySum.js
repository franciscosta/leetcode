
function addBinary(a, b) {

  const longest = a.length > b.length ? a.length : b.length;

  a = a.padStart(longest, 0);
  b = b.padStart(longest, 0);

  let result = '';

  let index = longest - 1;

  let carryOver = 0;

  while (index >= 0) {

    let digitA = Number(a[index]);
    let digitB = Number(b[index]);

    let currentSum = digitA + digitB + carryOver;

    switch (currentSum) {
      case 0:
        result = '0' + result;
        carryOver = 0;
        break;
      case 1:
        result = '1' + result;
        carryOver = 0;
        break;
      case 2:
        result = '0' + result;
        carryOver = 1;
        break;
      case 3:
        result = '1' + result;
        carryOver = 1;
        break;
    }

    index -= 1;

    if (index < 0 && carryOver === 1) result = '1' + result;

  }

  return result;
}






console.log(
  addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'));

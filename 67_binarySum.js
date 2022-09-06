
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



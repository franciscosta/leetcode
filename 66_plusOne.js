
function plusOne(number) {
  let index = number.length - 1;

  while (index >= 0) {

    if (number[index] < 9) {
      number[index] += 1;
      break;
    } 

    if (number[index] === 9) {
      number[index] = 0;
      if (index - 1 < 0) {
        number.unshift(0);
        index = 0;
      } else {
        index -= 1;
      }
    }
  }

  return number;
}

function plusOne1(number) {
  return String(BigInt(number.join('')) + 1n).split('');
}

console.log(
  plusOne([1,2,3]),
  plusOne([4,3,2,1]),
  plusOne([9]),
  plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]),
  plusOne([9,9])
);

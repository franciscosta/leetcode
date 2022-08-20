
const intToRoman = integer => {

  const map = {
    1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L',
    90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
  };

  let roman = '';

  const values = Object.keys(map).sort( (lhs, rhs) => lhs > rhs ).reverse();

  while (integer > 0) {

    for (let number of values) {
      if (number <= integer) {
        integer = integer - number;
        roman += map[number];
        break;
      }
    }
  }

  return roman;
}

console.log(
  //intToRoman(3),
  //intToRoman(58),
  //intToRoman(1994),
  intToRoman(20)
);

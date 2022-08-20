
const isPalindrome = number => {
  if (number < 0 || (number % 10 === 0 && number !== 0)) return false;

  let reversedNumber = 0;

  while (number > reversedNumber) {
    reversedNumber = reversedNumber  * 10 + number % 10;
    number = parseInt(number / 10);
  }

  return number === reversedNumber || number == parseInt(reversedNumber / 10);

};

const decomposeNumber = number => {
  const decomposed = [];

  while (number > 0) {
    decomposed.unshift( number % 10 );
    number = parseInt( number / 10 );
  }

  return decomposed;
};

const isPalindromeFrank = number => {

  if (number < 0) return false;
  if (number >= 0 && number <= 9) return true;
  
  number = decomposeNumber(number);
  const halfPoint = parseInt(number.length / 2);

  for (let index = 0; index < halfPoint; index += 1) {
    const pointer = number.length - 1 - index;
    if (number[index] !== number[pointer]) return false;
  }
  return true;
};

console.log(
  isPalindrome(3456),
  isPalindrome(121),
  isPalindrome(10),
  isPalindrome(-121),
  isPalindrome(0),
  isPalindrome(1221),
  isPalindrome(665544445566)
);

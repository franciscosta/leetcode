
const howManyDigits = number => {

  let digits = 1;

  while (number > 10) {
    number = parseInt(number / 10)
    digits += 1;
  }

  return digits;
};

const determinePlace = number => {

  const places = { 
    1: 'one', 2: 'ten', 3: 'hundred', 4: 'thousand',
    7: 'million', 10: 'billion', 13: 'trillion',
    16: 'quadrillion', 19: 'quintillion', 22: 'sextillion'
  }

  let digits = howManyDigits(number);

  while (!(digits in places)) {
    digits -= 1;
  }
  
  return places[digits];
};

console.log(
  determinePlace(123)
);

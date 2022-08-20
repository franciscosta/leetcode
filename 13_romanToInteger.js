

// Leet's Elegant Solution

const romanToInt = roman => {

  const romanToInteger = {
    M: 1000, D: 500, C: 100,
    L: 50, X: 10, V: 5, I: 1,
  };

  let sum = 0;
  let index = 0;

  while (index < roman.length) {

    const currentNumber = romanToInteger[roman[index]];
    const nextNumber = romanToInteger[roman[index + 1]] || 0;

    console.log(currentNumber, nextNumber);

    if (nextNumber > currentNumber) sum -= currentNumber;
    if (nextNumber <= currentNumber) sum += currentNumber;

    index += 1;
  }

  return sum;
}

console.log(
  romanToInt('III'),
  romanToInt('LVIII'),
  romanToInt('MCMXCIV'),
);

// Second solution: still my own 

const romantointeger = {
  M: 1000, D: 500, C: 100,
  L: 50, X: 10, V: 5, I: 1,
};

const romanToInt2 = roman => {

  let sum = 0;
  let index = 0;

  while (index < roman.length) {

    const firstRoman = romanToInteger[roman[index]];
    const secondRoman = romanToInteger[roman[index + 1]]

    if (firstRoman < secondRoman) {
      sum += ( secondRoman - firstRoman );
      index += 2;
    } else {
      sum += firstRoman;
      index += 1;
    }
  }

  return sum;
};


// First solution: my own

const memo = {
  M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, 
  L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
};

const miniRomanToInt = numeralAsArray => {

  if (numeralAsArray.length > 1) {
    const subNumeral = numeralAsArray[0] + numeralAsArray[1]; // MC

    if (subNumeral in memo) {
      numeralAsArray = numeralAsArray.splice(0, 2);
      return memo[subNumeral];
    }
  }

  return memo[numeralAsArray.shift()];
};

const romanToInt1 = numeral => {
  numeral = numeral.split('');

  let sum = 0;
  
  while (numeral.length > 0) {
    sum += miniRomanToInt(numeral);
  }

  return sum;
};

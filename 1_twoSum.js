
const checkSumEqualsTarget = (firstNumber, secondNumber, target) => {
  return firstNumber + secondNumber === target;
};

const twoSumImproved = (collection, target) => {

  let currentIndex = 0;
  let possibleNumber;
  
  const map = {};

  while (true) {

    possibleNumber = target - collection[currentIndex];

    if (possibleNumber in map) break;
    map[collection[currentIndex]] = currentIndex;
    currentIndex += 1;
  }

  return [currentIndex, map[possibleNumber]];
}



const twoSum = (collection, target) => {

  let found = false;
  let firstPointer = 0;
  let secondPointer = 1;

  while (!found) {
    const firstNumber = collection[firstPointer];
    const secondNumber = collection[secondPointer];

    found = checkSumEqualsTarget(firstNumber, secondNumber, target);

    if (!found) {
      secondPointer += 1;
      if (secondPointer > collection.length - 1) {
        firstPointer += 1;
        secondPointer = firstPointer + 1;
      }
    }
  }

  return [firstPointer, secondPointer]
};

console.log(
  twosumimproved([3, 2, 4], 6),
  twosumimproved([3, 2, 3], 6),
  twosumimproved([2,11,7,15], 9)
);

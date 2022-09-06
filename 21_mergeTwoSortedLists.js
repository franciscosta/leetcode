
const merge = (number, array) => {
  const length = array.length;

  for (let index = 0; index <= length; index += 1) {
    if (array[index] > number || !array[index]) {
      array.splice(index, 0, number);
      break;
    }
  }

  return array;
};

const mergeTwoLists = (array1 = [], array2 = []) => {

  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  const array = array1.slice();

  for (let number of array2) {
    merge(number, array);
  }

  return array;
};

console.log(
  mergeTwoLists([1, 2, 3], [2, 4, 5, 6])
);


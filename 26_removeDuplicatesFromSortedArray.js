
function removeDuplicates(array) {

  let rhs = array.length - 1;
  let lhs = rhs - 1;

  while (lhs >= 0) {
      
    const number1 = array[rhs];
    const number2 = array[lhs];

    if (number1 === number2) {
      array.splice(lhs, 1);
      //array.push(undefined);
    }

    rhs -= 1;
    lhs -= 1;
  }

  return array;
}

console.log(
  removeDuplicates([1, 1, 2]),
  removeDuplicates([1, 1, 2, 3]),
  removeDuplicates([0,0,1,1,1,2,2,2,3,3,3,4,4])
);

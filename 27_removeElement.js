
function removeElement(array, number) {
  
  let index = array.length - 1;

  while (index >= 0) {
    if (array[index] === number) array.splice(index, 1);
    index -= 1;
  }

  return array;
}

console.log(
  removeElement([3,2,2,3], 3),
  removeElement([0,1,2,2,3,0,4,2], 2)
);

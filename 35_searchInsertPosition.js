
function searchInsert(array, target) {
  for (let index = 0; index < array.length; index += 1) {
    const current = array[index];
    if (current >= target) return index;
  }

  return array.length;
}

console.log(
  searchInsert([1,3,5,6], 5),
  searchInsert([1,3,5,6], 2),
  searchInsert([1,3,5,6], 7),
);

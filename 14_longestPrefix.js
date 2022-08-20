// Leek inspired solution 

const commonPrefix = (left, right) => {
  let prefix = '';

  const smallest = Math.min(left.length, right.length);

  for (let index = 0; index < smallest; index += 1) {
    if (left[index] === right[index]) {
      prefix += left[index];
    } else {
      break;
    }
  }

  return prefix;
};

const longestCommonPrefix = words => {

  if (words.length < 2) return words[0];

  const mid = parseInt( words.length / 2 );

  const left = longestCommonPrefix( words.slice(0, mid) );
  const right = longestCommonPrefix( words.slice(mid) );

  return commonPrefix(left, right);
};

console.log(
  //longestCommonPrefix(['hello', 'hey', 'hej', 'heu', 'hegjkdfs']),
  //longestCommonPrefix(['as', 'a']),
  //longestCommonPrefix(["cir","car"]),
  commonPrefix("cir","car")
);



// My solution

const longestCommonPrefix1 = words => {
  
  let prefix = '';

  for (let i = 0; i < words[0].length; i += 1) {
    
    const letter = words[0][i];
    let isCommon = true;

    for (let j = 1; j < words.length; j += 1) {
      if (letter !== words[j][i]) isCommon = false;;
    }
    if (!isCommon) break;
    if (isCommon) prefix += letter;
  }

  return prefix;
};


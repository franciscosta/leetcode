
function lengthOfLastWord(sentence) {
  sentence = sentence.trim();

  let index = sentence.length - 1;
  let currentChar = sentence[index];
  let length = 0;

  while (currentChar !== ' ' && index >= 0) {
    index -= 1;
    length += 1;
    currentChar = sentence[index];
  }

  return length;
}

console.log(
  //lengthOfLastWord("Hello World"),
  //lengthOfLastWord("   fly me   to   the moon  "),
  //lengthOfLastWord("luffy is still joyboy"),
  lengthOfLastWord('a')
);

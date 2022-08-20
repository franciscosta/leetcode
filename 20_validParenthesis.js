/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/ 


const isValid = string => {

  const map = { '(': ')', '[': ']', '{': '}' };
  const isOpen = character => Object.keys(map).includes(character);
  const isClosed = character => Object.values(map).includes(character);

  const state = [];

  for (let index = 0; index < string.length; index += 1) {
    const character = string[index];

    if (isOpen(character)) state.push(character);
    if (isClosed(character)) {
      if ( map[state.pop()] !== character ) return false;
    }
  }

  return state.length === 0;
};

console.log(
  isValid('()[]{}'),
  isValid('({[]})'),
  isValid('[{}]()'),
  isValid('[}'),
  isValid('()')
);

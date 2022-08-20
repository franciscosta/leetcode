# Problem:

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

1. Input: a string containing only parenthesis
2. Output: boolean 
3. Rules / edge-cases:
  a. open brackets must be closed before string continues
  b. must be closed in correct order 
  c. upper bound: 1 <= s.length <= 104
  d. consists of parentheses only '()[]{}'.

4. Questions:
  a. Can the brackets contain other brackets? '( { [  ] } )' no

# Examples

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

# Algo

0. If string.length % 2 !=== 0 return false
1. Create a data structure / dict:
  '(' : ')'
  '[' : ']'
2. Iterate through the string by two pts:
  check that to every item, the next matches the dect
  if they don't match, return false
3. If we come out of the iteration alive, return true

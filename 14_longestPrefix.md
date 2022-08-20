# Problem

1. Write a function 
2. find the longest common prefix string
3. Amongst an array of strings.
4. If there is no common prefix, return an empty string ""
5. Constraints:
  a. 1 <= strs.length <= 200
  b. 0 <= strs[i].length <= 200
  c. strs[i] consists of only lowercase English letters.

6. Questions:
  a. Can the string be empty? no

# Examples

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

# Data Structure

Arrays

# Problem Solving

[
  0: 'fl owers'
  1: 'fl ow'
  2: 'fl ight'
  3: 'fl orist'
]

1. words.length is the total number of items I have to check
2. isolate the first word: i.e. flowers 
3. iterate from 0 up to array.length 
  a. if all words[0][0] match, add them to prefix 

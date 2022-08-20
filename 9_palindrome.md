# Problem

1. Input: Given an integer x
2. Output: true if x is palindrome integer.
3. An integer is a palindrome when it reads the same backward as forward.
4. For example, 121 is a palindrome while 123 is not.
5. Could you solve it without converting the integer to a string?

6. Edges:
  a. Will there ever be an empty input? Return false 
  b. What about negative numbers? How should I handle them? False
  c. Do I have to stay within the number data structure? Yes

# Examples:
Input: x = 121
Output: true

Input: x = -121
Output: false

Input: x = 10
Output: false

# Data Structure

1. Strictly number
2. Maybe an array to keep all digits?

# Algorithm

## Parts

  1. Decomposing a number into its parts
    a. Instantiate an array
    b. While the number is > 10
      a. I extract the last digit and add to array
      b. Then divide the number by 10 and parseInt
    c. Return the array

  2. Analyze number in array form:
    a. Iterate over the array once all the way to middle 
    b. index at 0; pointer at the end of array 
    c. have them meet in the middle 
    d. if at any point they don't match return false 
    e. return true at the end 

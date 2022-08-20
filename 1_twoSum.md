# Problem 5min

## Base problem
Input:
- Given an array of integers nums 
- and an integer target

Return:
- indices of the two numbers such that they add up to target.

Rules:
1. Assume that each input would have exactly one solution
2. and you may not use the same element twice.
3. You can return the answer in any order.

## In my own words
1. Input: an array of integers and a target number 
2. Return: The indices of the two numbers in array that add up to target 
3. Can return them in any order 
4. Assumptions:
  1. Array will not be empty
  2. Target will not be empty 
  3. There is always ONE solution 


### Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

### Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

### Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

## Follow-up: 
Can you come up with an algorithm that is less than O(n2) time complexity?

# Solution 20m

[1, 4] -> 5 -> [0, 1]
[5, 6] -> 11 -> [0, 1]

1. Parts: 
  a. A method that compares sums two numbers and checks if they match target

[a, b]
a -> b 
(1)

[a, b, c]
a -> b
a -> c 
b -> c 
(3)

[a, b, c, d]
a -> b 
a -> c 
a -> d 
b -> c 
b -> d 
c -> d 
(6)

Basic solution:
1. I can check each number against all remaining
2. Remove it 
3. Check the first number against all remaining
...

Second solution:
1. Instantiate a found boolean as false
2. Instantiate two pointers
3. while not found :
  a. set first pointer to first index 0
  b. set second pointer to 1 
  c. by the time my first pointer reaches the end i set it to the second index
  d. BUT i set my second pointer to firstpointer + 1 
  e. check again 

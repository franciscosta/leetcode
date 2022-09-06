# Problem

- Given an integer array nums sorted in non-decreasing order
- remove the duplicates in-place such that each unique n appears only once 
- The relative order of the elements should be kept the same

- Since it is impossible to change the length of the array in some languages
- you must have the result be placed in the first part of the array nums.
- More formally, if there are k elements after removing the duplicates,
- then the first k elements of nums should hold the final result.
- It does not matter what you leave beyond the first k elements.

- Return k after placing the final result in the first k slots of nums.

- Do not allocate extra space for another array.
- You must do this by modifying the input array
- in-place with O(1) extra memory.

1. Input: an array sorted in ascending order with duplicates
2. Output: the same array with:
  - duplicates removed 
  - remaining numbers all pushed together at the start
3. Boundaries:
  - it doesn't matter what the empty slots are filled with
  - i.e. it can be undefined

# Examples

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_ ]

- It does not matter what you leave beyond the returned k
- hence they are underscores

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_ ]

# Data Structure

Array

# Algorithm

0. Parts:
  - Identifying there are duplicates 
    - traverse through the array and remove the duplicates 
    - two pointers, one at the start, another to find and destroy 
  - Removing them in place 
  - Condensing all elements at the start 

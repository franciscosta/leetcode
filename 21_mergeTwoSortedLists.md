# Problem

- You are given the heads of two sorted arrays
- list1 and list2.
- Merge the two arrays into one sorted list.
- The list should be made by splicing together the nodes of the first two lists.
- Return the head of the merged linked list

1. Input: Two sorted arrays
2. Output: merged sorted array 
3. Guidelines:
  - if inputs are empty, return empty array 
  - if one is empty, return the other 
  - else: return the array, sorted 

# Example

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]

# Data Structure

Array

# Algorithm

- Iterate over the arrays via pointer
- one pointer for each array 
- if both pointers reach the end of their respective arrays, break

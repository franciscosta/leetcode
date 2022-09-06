# Problem

- Given a sorted array of distinct integers
- target value
- return the index if the target is found
- If not, return the index where it would be if it were inserted in order.
- You must write an algorithm with O(log n) runtime complexity

# Example

[1,3,5,6], target = 5
-> 2

[1,3,5,6], target = 2
-> 1

[1,3,5,6], target = 7
-> 4

# Algorithm

1. Traverse the array
2. If item is found return index position
3. if item is bigger than target, return that index position

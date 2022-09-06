# Problem

- Given a string s consisting of words and spaces,
- return the length of the last word in the string.
- A word is a maximal substring consisting of non-space characters only

# Example

"Hello World" -> 5
"   fly me   to   the moon  " -> 4
"luffy is still joyboy" -> 6

# Algorithm

1. Trim the sentence
2. Traverse backwards until you find an empty space
3. return how many times you moved


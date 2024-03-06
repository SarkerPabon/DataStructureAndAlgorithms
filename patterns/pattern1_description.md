# Patter 1: Rectangular Star Pattern

## Probelem Statement: Give an integer N, print the following pattern

### Example 1

```
Example 1:
Input: N = 3
Output:
* * *
* * *
* * *
```

### Example 2

```
Example 2:
Input: N = 6
Output:
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
```

# Soutions

> Patterns - Nested Loops

## Four Rules

I) For the outer loop, count the number of lines

II) For the inner loop, focus on the columns, & connect them somehow to the rows

III) Print then '\*' inside the inner for loop

IV) Observe symmetry (optional)

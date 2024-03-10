# Patter 10: Half Diamond Star Pattern

## Probelem Statement: Given an integer N, print the following pattern

### Example 1

```
Result:
  *
  **
  ***
  **
  *
```

### Example 2

```
Input Format: N = 6
Result:
  *
  **
  ***
  ****
  *****
  ******
  *****
  ****
  ***
  **
  *
```

# Soutions

> Patterns - Nested Loops

## Four Rules

I) For the outer loop, count the number of lines

II) For the inner loop, focus on the columns, & connect them somehow to the rows

III) Print then '\*' inside the inner for loop

IV) Observe symmetry (Optional - Applied)

## Break Down Problem

- We need 9 columns, if our input is 5

- For outer loop/row/line formulla = 2\*n-1

- For inner loop, we can break down with "Symmetry"

  - First half (until 5), ourter loop/column/star = i
    (Here we increase star by 1)

  - After the end first half (until 5), ourter loop/column/star = 2\*n -1
    (Here we decrease star by 1)

```
*
**
***
****
*****
******
*****
****
***
**
*
```

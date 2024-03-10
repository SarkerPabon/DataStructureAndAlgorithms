# Patter 9: Diamond Star Pattern

## Probelem Statement: Given an integer N, print the following pattern

### Example 1

```
Input Format: N = 3
Result:
  *
 ***
*****
*****
 ***
  *
```

### Example 2

```
Input Format: N = 6
Result:
     *
    ***
   *****
  *******
 *********
***********
***********
 *********
  *******
   *****
    ***
     *
```

# Soutions

- Combined with Pattern 7 and Pattern 8

## Four Rules

I) For the outer loop, count the number of lines

II) For the inner loop, focus on the columns, & connect them somehow to the rows

III) Print then '\*' inside the inner for loop

IV) Observe symmetry (optional)

## Break Down Problem First Half Solution (Pattern 7)

> Patterns - Nested Loops

- We need 9 columns, if our input is 5
- Every row/line has this pattern

  > [space, star, space]

```
     *      [4, 1, 4]
    ***     [3, 3, 3]
   *****    [2, 5, 2]
  *******   [1, 7, 1]
 *********  [0, 9, 0]
```

- Space Formulla: n - i - 1
  ```
    1st Line: row/line = 0, space = (5 - 0 - 1) = 4
    2nd Line: row/line = 1, space = (5 - 1 - 1) = 3
    3rd Line: row/line = 2, space = (5 - 2 - 1) = 2
    4th Line: row/line = 3, space = (5 - 3 - 1) = 1
    5th Line: row/line = 4, space = (5 - 4 - 1) = 0
  ```
- Star Formulla: 2 x i + 1
  ```
    1st Line: row/line = 0, star = (2 * 0 + 1) = 1
    2nd Line: row/line = 1, star = (2 * 1 + 1) = 3
    3rd Line: row/line = 2, star = (2 * 2 + 1) = 5
    4th Line: row/line = 3, star = (2 * 3 + 1) = 7
    5th Line: row/line = 4, star = (2 * 4 + 1) = 9
  ```

## Break Down Problem Second Half Solution (Pattern 8)

> Patterns - Nested Loops

- We need 9 columns, if our input is 5
- Every row/line has this pattern

  > [space, star, space]

```
 *********  [0, 9, 0]
  *******   [1, 7, 1]
   *****    [2, 5, 2]
    ***     [3, 3, 3]
     *      [4, 1, 4]
```

- Space Formulla: i
  ```
    1st Line: row/line = 1, space = i = 0
    2nd Line: row/line = 2, space = i = 1
    3rd Line: row/line = 3, space = i = 2
    4th Line: row/line = 4, space = i = 3
    5th Line: row/line = 5, space = i = 4
  ```
- Star Formulla: (2 x n) - (2 x i + 1)
  ```
    1st Line: row/line = 1, star = (2 x 5) - (2 * 0 + 1) = 9
    2nd Line: row/line = 2, star = (2 x 5) - (2 * 1 + 1) = 7
    3rd Line: row/line = 3, star = (2 x 5) - (2 * 2 + 1) = 5
    4th Line: row/line = 4, star = (2 x 5) - (2 * 3 + 1) = 3
    5th Line: row/line = 5, star = (2 x 5) - (2 * 4 + 1) = 1
  ```

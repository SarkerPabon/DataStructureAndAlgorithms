# Patter 11: Binary Number Triangle Pattern

## Probelem Statement: Given an integer N, print the following pattern

### Example 1

```
Input Format: N = 3
Result:
1
01
101
```

### Example 2

```
Input Format: N = 6
Result:
1
01
101
0101
10101
010101
```

# Soutions

> Patterns - Nested Loops

## Four Rules

I) For the outer loop, count the number of lines

II) For the inner loop, focus on the columns, & connect them somehow to the rows

III) Print then '\*' (Here 0 or 1) inside the inner for loop

IV) Observe symmetry (Optional - Not Applied)

## Break Down Problem (Similar Pattern 2)

- At beginning we decalre a variable start = 1;

- In Outer Loop/row/line, we determine how the start line with 0 or 1.

  - In here we have an pattern, which is odd line number start with 1 and even line number start with 0
    - We implement this with if-else statement

- In Inner Loop/column, we print 0 and 1

  - For flipping number we subtract 'start' variable from 1

    - start = 1 - start

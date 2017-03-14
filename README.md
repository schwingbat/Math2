# Math2.js

A simple collection of utility functions that should be in the JS Math object but aren't. I'll be adding to the list as I need them.

The current functions available are:

### range
`Math2.range(low, high[, round])`

Returns a number between specified low and high ranges. Optionally rounded if the third parameter is `true`.

```javascript
Math2.range(1, 10) // => 3.6221051
Math2.range(1, 50, true) // => 44

// It's essentially the same as:
Math.random() * (high - low) + low;
// ...but much easier to remember.
```

### clamp
`Math2.clamp(number, low, high)`

Takes a number, a low bound and a high bound and clamps the number within that range.

```javascript
// It's shorthand for this:
Math.min(10, Math.max(1, 16))

// because people always reverse the numbers and it requires some mental overhead to figure it out (at least for me).

// So if you want to make sure a number is limited to a range between 1 and 10, you can do this instead:
Math2.clamp(16, 1, 10);
```

### encomma
`Math2.encomma(number[, delimiter])`

Adds commas (or other delimiter of choice) at proper spaces to make larger numbers easier to read. Takes a number or a string and returns a string.

It also strips commas as part of its process, which has the nice side effect of fixing improperly placed commas.

Also there might be a real name for this process. If you know it, let me know.

```javascript
Math2.encomma(100000000) // => 100,000,000
Math2.encomma("1,23456,7", "!") // => 1!234!567
```

### decomma
`Math2.decomma(number)`

Takes a string and strips the commas, returning a number. It's like `encomma` in reverse.

```javascript
Math2.decomma("100,000,000") // => 100000000
```
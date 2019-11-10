'use strict'
import './scss/main.scss'

// 1. // isPrime - Returns true or false, indicating whether the given number is prime.
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}
isPrime(17)

// 2. // factorial - Returns a number that is the factorial of the given number.
const factorial = n => (!(n > 1) ? 1 : factorial(n - 1) * n)
factorial(0)

// 3. // fib - Returns the nth Fibonacci number.
const fib = (n, a = 1, b = 0) => (n === 0 ? b : fib(n - 1, a + b, a))
fib(20)

// 4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
const arr = [3, 9, -3, 10]
const isSorted = arr => arr.slice(1).every((item, i) => arr[i] <= item)
isSorted(arr)

// 5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
const reverse = str => str.split('').reduce((rev, char) => char + rev, '')
reverse('abcdef')

// 6. //indexOf - Implement the indexOf function for arrays.
const myIndexOf = (arr, index) => {
  return arr.filter(elem => elem === index).length > 0 ? index - 1 : -1
}
myIndexOf([1, 2, 3], 4)

// 7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
const isPalindrome = str => {
  const re = /[\W_]/g
  const lowRegStr = str.toLowerCase().replace(re, '')
  const reverseStr = lowRegStr
    .split('')
    .reverse()
    .join('')
  return reverseStr === lowRegStr
}
isPalindrome('A man a plan a canal Panama')

// 8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
const isMissing = arr => {
  let total = 1
  for (let i = 2; i <= arr.length + 1; i++) {
    total += i
    total -= arr[i - 2]
  }
  return total
}
isMissing([1, 4, 3])

// 9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
const isBalanced = string => {
  let open = []

  const openBrackets = new Set(['(', '[', '{'])

  const bracketCorrespondence = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let c of string) {
    if (openBrackets.has(c)) {
      open.push(c)
    } else if (
      bracketCorrespondence[c] &&
      open.pop() !== bracketCorrespondence[c]
    ) {
      return false
    }
  }

  return !open.length
}

isBalanced('foo { bar { baz } boo }')

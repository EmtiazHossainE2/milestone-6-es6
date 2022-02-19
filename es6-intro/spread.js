const numbers = [10, 20, 30, 40, 50]
numbers.push(11, 12, 9292)
console.log(numbers)
console.log(...numbers);
// const num1 = Math.max(numbers) //return not a number 
const num1 = Math.max(...numbers)

const max1 = Math.max(30, 40, 60)
console.log(num1, max1)
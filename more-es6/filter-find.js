const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const bigNumbers = numbers.filter(num => num > 40);
const smallNumbers = numbers.filter(num => num < 50)

console.log(bigNumbers)
console.log(smallNumbers)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'pink');
// console.log(blacks);
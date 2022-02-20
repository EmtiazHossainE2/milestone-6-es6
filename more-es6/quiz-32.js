//2
function min(nums) {
    return Math.min(nums)
}
console.log(min([1, 3, 2]))

//3 
const cube = x => x * x * x;
console.log(cube(2))

//4
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);

//5 
const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y)

//7 
const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);

console.log(output);

//8 How will you find the first friend who has a name with 5 characters? 
const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
console.log(friends.find(friend => friend.length == 5))

//9 How will you get the price from the product object? 
const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' }
const { price } = product
console.log(price)

//10 
const name = 'Adam Sandler';

const greeting = `Hello ${name}, welcome to the club`;
console.log(greeting)

//11 How would you access "23 something street" from the following array of objects?? 
const person = [
    {
        singer: 'Atif aslam',
        address: '23 something street'
    }
]
console.log(person[0].address)

//12 
const player = {
    name: { firstName: "Mashrafe", lastName: "Murtaza" },
    age: 38
};

console.log(player.firstName);

//15 How to return an array of first names from "players" array ?
const players = [
    { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
    { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
    { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
    { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
];

console.log(players.map((player) => player.name.firstName))




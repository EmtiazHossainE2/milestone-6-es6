// const plus = (num1, num2, num3) => num1 + num2 + num3
const plus = (num1, num2, num3 = 100) => num1 + num2 + num3
const sum = plus(10, 20)
console.log(sum);


const add = (num1, num2) => num1 + num2;
const sum2 = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);

const tenTimes = (num) => num * 10;
const output = tenTimes(17);

const fiveTimes = num => num * 5;
const value = fiveTimes(17);

const getname = () => 'Emtiaz Hossain '
const name = getname()
console.log(name)


const doMath = (x, y) => {
    const sum = x + y //12
    const dif = x - y //2 
    const multy = sum * dif //24 
    const divi = multy * 5 //24 * 5 = 120 
    return divi
}
const total = doMath(7, 5)
console.log(total)
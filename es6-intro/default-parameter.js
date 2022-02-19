function add() {
    // arguments = num1 + num2;
    // return arguments
    let sum = 0
    for (const num of arguments) {
        // console.log(num)
        sum = sum + num
    }
    return sum
    // console.log(arguments)
}
const numbers = add(10, 100, 100, 10000)
console.log(numbers);

function plus(num1, num2 = 10) {
    //Parameter er vitor value= value thaka mane call korar somoy value set na korle oita pabe
    const plus = num1 + num2
    return plus
}
const num = plus(100)
console.log(num)
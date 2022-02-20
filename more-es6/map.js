// const numbers = [5, 10, 15, 20, 25]
// const output = []
/*
function doubleOld(number) {
    return number * 2
}
const doubleIt = number => number * 2
 */
// for (const number of numbers) {
//     const result = doubleIt(number)
//     output.push(result)
// }

/* 1.loop throw each element 
2. element diye function ke call korci 
3.result ekta array er moddhe push korci  */

// console.log(output)

//map diye same kaj kora jay 
const numbers = [5, 10, 15, 20, 25]
const value = []
const doubleIt = number => number * 2
const output = numbers.map(doubleIt) //map uporer kaj gulan e kore
console.log(output)
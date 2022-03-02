/* const bank = owner => {
    balance = 0
    return amount => {
        balance += amount
        return balance
    }
} */

const bank = owner => {
    balance = 0
    return {
        deposit: amount => {
            balance += amount
            return balance
        },
        withdraw: amount => {
            balance -= amount
            return balance
        }
    }
}

const IslamiBank = bank('Emtiaz')
console.log(IslamiBank.deposit);
console.log(IslamiBank.deposit(1000));
console.log(IslamiBank.deposit(500));
console.log(IslamiBank.balance);
console.log('Deposit ' + IslamiBank.deposit(5000));
console.log('Withdraw ' + IslamiBank.withdraw(4000));


/* (function () {
    let num1 = 1
    let num2 = 2
    let sum = function () {
        let num3 = 3
        return num1 + num2 + num3
    }
    console.dir(sum);

})()  */

let num1 = 1
let num2 = 2
let sum = function () {
    let num3 = 3
    return num1 + num2 + num3
}
console.dir(sum);

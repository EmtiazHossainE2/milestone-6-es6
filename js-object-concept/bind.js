const mySelf = {
    name: 'Emtiaz Hossain',
    lastName: 'Emon',
    money: 5000,
    food: function (exp, gift) {
        this.money = this.money - exp - gift;
        return this.money
    }
}
console.log(mySelf.food(2000, 500))

const herSelf = {
    name: 'Emana Ema',
    lastName: 'Bola Jabe Na',
    money: 10000
}
const herFood = mySelf.food.bind(herSelf)
console.log(herFood(500, 100))
console.log(herFood(500, 100))
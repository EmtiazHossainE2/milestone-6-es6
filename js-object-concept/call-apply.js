const mySelf = {
    name: 'Emtiaz Hossain',
    lastName: 'Emon',
    money: 5000,
    food: function (exp, gift) {
        this.money = this.money - exp - gift;
        console.log(this)
        return this.money
    }
}
const herSelf = {
    name: 'Emana Ema',
    lastName: 'Bola Jabe Na',
    money: 10000
}
const yourSelf = {
    name: 'SJ Rion Mia',
    age: 1000,
    money: 70000
}

//call
mySelf.food.call(herSelf, 500, 100)
mySelf.food.call(herSelf, 1500, 100)        // call use korle comma use korbo 
mySelf.food.call(yourSelf, 2000, 300)

//apply 
mySelf.food.apply(herSelf, [200, 30])
mySelf.food.apply(yourSelf, [4000, 300])   //apply use korle comma er sathe parameter 
mySelf.food.apply(yourSelf, [3000, 200])    //gulan array te dibo
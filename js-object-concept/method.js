const mySelf = {
    name: 'Emtiaz Hossain',
    lastName: 'Emon',
    money: 5000,
    age: 22,
    bestFriends: ['Rion', 'Dipta'],
    dream: function () {
        console.log(this.name, 'dream is software engineer');
        console.log(this.bestFriends[0], ' is a Doctor');
    },
    food: function (exp, gift) {
        this.money = this.money - exp - gift;
        return this.money
    }
}
mySelf.dream()
console.log(mySelf.food(2000, 500))
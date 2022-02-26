const mySelf = {
    name: 'Emtiaz Hossain',
    lastName: 'Emon',
    age: 22,
    bestFriends: ['Rion', 'Dipta'],
    dream: function () {
        console.log(this.name, 'dream is software engineer');
        console.log(this.bestFriends[0], ' is a Doctor');
    }
}
mySelf.dream()
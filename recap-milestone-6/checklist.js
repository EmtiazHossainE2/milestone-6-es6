//১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।

const mySelf = {
    firstname: 'Emtiaz Hossain ',
    money: 5000,
    phoneNumbers: ['01748658702', '01568194230', '01844462125', '01303597142'],
    bestFriend: {
        name: 'Rion ',
        home: 'Pirgonj',
        study: 'RMC',
        age: 23
    },
    food: function (exp) {
        this.money = this.money - exp
        return this.money
    }
}
console.log(mySelf.bestFriend.name)
console.log(mySelf.phoneNumbers[1])
console.log(mySelf.food(500))
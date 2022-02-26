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

//২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

const friends = `
    money: 5000,
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
`

//৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
const number89 = () => 89
console.log(number89())

//৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
const singlePera = x => x / 7
console.log(singlePera(49))

// const fiveTimes = num => num * 5;
// const value = fiveTimes(15);
// console.log(value)

//৩.৩ দুই প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const doublePera = (x, y) => {
    const sum = x + y;  // 10+20 = 30 
    const divi = sum / 2; // 30/ 2 = 15 
    return divi;
}
console.log(doublePera(10, 20))

//৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const multyPera = (x, y) => {
    const sumX = x + 7;  // 10+7 = 17
    const sumY = y + 7; // 20+ 7 = 27 
    const totalSum = sumX + sumY; //17+27 = 44
    return totalSum
}
console.log(multyPera(10, 20))

//৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  

const myNumbers = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
const result = myNumbers.map(number => number / 7)
console.log(result)

//৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  
/* 
map() array er potiti upadaner jonne function call kore & sob function er result ke notun array te return kore . 

forEach() array er potita upadan er jonner function ke call kore kintu kono kicu return kroe nah . 

filter() array er potita upadan er moddhe jeta jeta condition fullfill korbe seta ke ekta array te rekhe seta return korbe 

find() array er potita upadan er moddhe jeta first e condition fillup korbe setai just return korbe 

this ==> class er vitore obj er property gulo access korar jonne this use kora hoy . 

*/


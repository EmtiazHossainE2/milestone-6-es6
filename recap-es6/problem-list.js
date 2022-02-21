//১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
const myName = 'Emtiaz Hossain Emon ' //const variable not change 
console.log(myName)
let myAge = 22  // let er value change hote pare kintu const er hobe nah 
myAge = 23
console.log(myAge);

//২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
const mySchool = 'Rangpur Zilla School '
const myFriend = {
    name: 'Hajim',
    home: 'Borobari',
    phoneNumber: 0177777777
}
const { name, home } = myFriend
const aboutMySchool = `My school name is ${mySchool} . My friend name is ${name} . he lives in ${home}`
console.log(aboutMySchool)
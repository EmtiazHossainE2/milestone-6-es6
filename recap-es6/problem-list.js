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
console.log(aboutMySchool);

//৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

const divideFive = x => x / 5
const result = divideFive(25)
console.log(result)

//৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  
const number2 = (x, y) => {
    const first = x + 2 // 4 
    const second = y + 2; // 5 
    const output = first * second // 4 * 5 = 20 
    return output
}
console.log(number2(2, 3))

//৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  

const number3 = (x, y, z) => {
    const p1 = x * x; //2 * 2 = 4
    const p2 = y * y; // 3*3 = 9 
    const p3 = z * z; //4* 4 = 16 
    const total = p1 * p2 * p3 // 4*9*16 = 576 
    return total
}
console.log(number3(2, 3, 4))

//৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

//৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const array5 = myArray.map(num => num * 5)
console.log(myArray.map(num => num * 5))

//৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  
console.log(myArray.filter(x => x % 2 == 1))

//৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const products = [
    { name: 'hp laptop', price: 50000, ram: 12, color: 'Red' },
    { name: 'phone', price: 50000, ram: 2, color: 'Black' },
    { name: 'Tv', price: 20000, color: 'Pink' },
    { name: 'Cycle', price: 5000, color: 'Green' }
]
const cheap = products.find(product => product.price == 5000);
console.log(cheap)

//৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  

const phones = { name: 'nokia', price: 5500, ram: 4, camera: 13 }
const { price, ram } = phones
console.log(price, ram)

//৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  

const myLaptop = {
    name: 'Hp ',
    gen: { core: 'i-5 ', screen: 15 },
    internalPro: {
        ram: 12,
        rom: '1TB',
        ssd: 250,
        external: {
            mouse: 'A4Tech',
            keyboard: 'Havit'
        }
    }
}
const { keyboard } = myLaptop.internalPro.external
console.log(keyboard) 
const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`
console.log(bondCode)

const data = { result: [{ userName: { title: 'Mr.', name: "sakib khan" } }] }
console.log(data.result[0].userName.name)

const p = [1, 2, 3];
const q = p.map(n => Math.pow(n, 3));

console.log(q)

const info = { name: "", phoneNumber: null };
console.log(JSON.stringify(info));

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));

// console.log(JSON.stringify({ eventName: "birthday", date: Date().tomorrow() }));
console.log(JSON.stringify({ eventName: "birthday", date: new Date() }));
console.log(JSON.stringify({ eventName: "birthday", date: Date() }));
console.log(JSON.stringify({ eventName: "birthday", date: "2022-02-21" }));
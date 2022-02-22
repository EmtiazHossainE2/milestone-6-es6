const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name);

const premikas = {
    name: 'keka ferdousi',
    cars: { brand: 'toyota' }
}
const { brand } = premikas.cars
console.log(brand)

const info = { data: [{ language: "Javascript", library: "React" }] }
console.log(info.data[0].library)
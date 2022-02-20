const myObject = { x: 1, y: 2, z: 3, a: 4, b: 5, c: 6 }
const { x, b, m = 10 } = myObject
console.log(x, b, m);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html5',
            second: 'css3',
            third: 'js'
        }
    },
};

console.log(company?.web?.tech?.second)
console.log(company?.backend?.tech.second) //error er jonne ? use 
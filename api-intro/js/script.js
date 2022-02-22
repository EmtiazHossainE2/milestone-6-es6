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

const companyStringify = JSON.stringify(company);
console.log(company)
console.log(companyStringify)

const companyParse = JSON.parse(companyStringify)  // json stringify ke parse korle object ke pabo 
console.log(companyParse)
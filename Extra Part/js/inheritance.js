class Support {
    name;
    address;
    designation = 'Web Instructor'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startASession() {
        console.log(this.name, 'Start a session');
    }
}
class StudentCare {
    name;
    address;
    designation = 'Relationship Manager'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}
class Neptune {
    name;
    address;
    designation = 'App Developer'
    constructor(name, address) {
        this.name = name;
        this.address = address
    }
    releaseApp(version) {
        console.log(this.name, 'release version ', version);
    }
}



const mirHussain = new Support('Mir Hussain', 'Dhanmondi')
const sagorBiswas = new Support('Sagor Biswas', 'Ctg')
const mehediHasan = new StudentCare('Mehedi Hasan', 'Ctg')
const raselAhmed = new Neptune('Rasel Ahmed', 'Ctg')

console.log(mirHussain, sagorBiswas, mehediHasan, raselAhmed);
mirHussain.startASession();
sagorBiswas.startASession();
mehediHasan.buildARoutine('Rion')
raselAhmed.releaseApp('1.4.64');
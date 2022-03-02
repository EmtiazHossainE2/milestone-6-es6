class TeamMember {
    name;
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    supportTime;
    constructor(name, address, time) {
        super(name, address)
        this.supportTime = time;
    }
    startASession() {
        console.log(this.name, 'Start a session');
    }
}
class StudentCare extends TeamMember {
    designation = 'Relationship Manager'
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}
class Neptune extends TeamMember {
    codeEditor
    designation = 'App Developer'
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor
    }
    releaseApp(version) {
        console.log(this.name, 'release version ', version);
    }
}



const mirHussain = new Support('Mir Hussain', 'Dhanmondi', 11)
const sagorBiswas = new Support('Sagor Biswas', 'Ctg', 4)
const tanmoyParvez = new Support('Tanmoy Parvez', 'Pabna', 9)
const hebronHossain = new Support('Hameem', 'Dhaka', 11)
const mehediHasan = new StudentCare('Mehedi Hasan', 'Dhaka')
const raselAhmed = new Neptune('Rasel Ahmed', 'Dhaka', 'Android Studio')

console.log(mirHussain, sagorBiswas, mehediHasan, raselAhmed);
mirHussain.startASession();
sagorBiswas.startASession();
mehediHasan.buildARoutine('Rion')
raselAhmed.releaseApp('1.4.64');
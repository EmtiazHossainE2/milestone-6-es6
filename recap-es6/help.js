// let name = 'Eshat Hasan'
// let me = {
//     name: "Emtiaz Emon",
//     thisInArrow: () => {
//         console.log("My name is " + this.name); // no 'this' binding here 
//     },
//     thisInRegular() {
//         console.log("My name is " + this.name); // 'this' binding works here 
//     }
// };
// me.thisInArrow();
// me.thisInRegular();

var name = "Suprabha"
let newObject = {
    name: "supi",
    arrowFunc: () => {
        console.log(this.name);
    },
    regularFunc() {
        console.log(this.name);
    }
}
newObject.arrowFunc(); // Suprabha
newObject.regularFunc(); // supi


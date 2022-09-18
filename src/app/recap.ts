// class Person{
//     private age:number;
//             lastname:string;
//     constructor (age:number, lastname:string){
//     this.age=age;
//     this.lastname=lastname;
//}
// }


class Person {
    constructor(public age: number, public lastname: string) { }
}

const javier = new Person(31, 'Pérez');
javier.age;





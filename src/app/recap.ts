// class Person{
//     private age:number;
//             lastname:string;
//     constructor (age:number, lastname:string){
//     this.age=age;
//     this.lastname=lastname;
//}
// }


// class Person {
//     constructor(public age: number, public lastname: string) { }
// }

// const javier = new Person(31, 'Pérez');
// javier.age;

const username: string = 'Nicolas';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class Person {

  constructor(private age: number, public lastName: string) {}
}

const nico = new Person(15, 'Molina');







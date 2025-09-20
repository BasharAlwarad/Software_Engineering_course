'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('Hello world');
// let age: number = 20;
// let name: string = 'John';
// if (age < 50) {
//   age += 10;
// }
// console.log(age);
// function x(y: any) {
//   console.log(y);
// }
// x('Hey');
// // let myArr: number[] = [1, 2, '3'];
// let myArr: [number, number, string] = [1, 2, '3'];
// // myArr[0] = '2';
// let myArr2: [number, number, string] = [1, 2, '3'];
// // let myArr2: string[] = [1, 2, '3'];
// myArr.push(4);
// myArr2.forEach((e) => console.log(e.toLocaleString()));
// // myArr2.forEach((e) => console.log(e.length));
// myArr.forEach((e) => console.log(e.toString()));
// const enum size {
//   Small = 'S',
//   Medium = 'M',
//   Large = 'L',
// }
// // console.log(size[100]);
// console.log(size.Small);
// console.log(size.Medium);
// let mySize: size = size.Large;
// console.log(mySize);
// function calculateTax(income: number, taxYear?: number): number {
//   let x: number = 0;
//   if ((taxYear || 2024) === 2025) {
//     x = 0.5;
//   } else {
//     x = 0.9;
//   }
//   // console.log(income);
//   if (income < 500) {
//     return income * x;
//   }
//   return income;
// }
// console.log(calculateTax(100, 2025));
// console.log(calculateTax(100));
/* Objects */
// type Employee = {
//   readonly id: number;
//   firstName: string;
//   age?: number;
//   retire: (date: Date) => void;
// };
// let employee: Employee = {
//   id: 0,
//   firstName: 'John',
//   retire: (date: Date) => console.log(date),
// };
// // employee.id = 1;
// console.log(employee);
// employee.retire(new Date());
// type Employee2 = {
//   readonly id?: number;
//   firstName: String;
//   age: number;
// };
// let employee2: Employee2 = { firstName: 'John', age: 0 };
// console.log(employee2);
// function kgToLbs(weight: number | string) {
//   if (typeof weight === 'number') {
//     return weight * 0.2;
//   } else {
//     return parseInt(weight) * 0.2;
//   }
// }
// console.log(kgToLbs(2));
// console.log(kgToLbs('2'));
/*
intersection types
*/
// type Draggable = {
//   drag: () => void;
// };
// type ReSizable = {
//   resize: () => void;
// };
// type UIWidget = Draggable & ReSizable;
// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };
/*
Literal types
*/
// type Quantity = 50 | 100;
// let quantity: Quantity = 50;
// console.log(quantity);
/*
Nullable types
*/
function greet(name) {
    console.log(name.toUpperCase());
}
greet('John');
//# sourceMappingURL=index.js.map
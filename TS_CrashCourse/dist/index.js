"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Entry Point
/* Types */
let myNumber = 2;
let myString = '2';
//// default type
// TypeScript infers types based on the value assigned
// let x = 'Hello';
// this will throw an error because x is inferred as a string
// x = 2;
//// any
// use any to allow any type of value
// let y: any = 'Hello';
//// object
// use object to allow any object type
// let z: object = { name: 'John' };
//// type
// use type to create a custom type
// type aliasing
// let user1: {
//   first_name: string;
//   age: number;
//   isEmployee: boolean;
// } = {
//   first_name: 'John',
//   age: 30,
//   isEmployee: true,
// };
// type annotation
// type typeUser = {
//   first_name: string;
//   age: number;
//   isEmployee: boolean;
// };
// let user2: typeUser = {
//   first_name: 'John',
//   age: 30,
//   isEmployee: true,
// };
//// type annotation with functions
// function type annotation
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }
//// optional, default, rest
// function hey(x: number = 25, y?: number, ...args: number[]): string {
//   console.log(y);
//   console.log(args);
//   return 'Hey';
// }
// console.log(hey(5, 4, 4, 4));
// const hey2 = (x: number = 25, y?: number, ...args: number[]): string => 'Hey';
// console.log(hey2(5, 4, 4, 4));
/* Void & Never */
//// use void to indicate a function does not return a value
// const hey2 = (x: number = 25, y?: number, ...args: number[]): void =>
//     console.log('Hey');
// hey2(5, 4, 4, 4);
//// use never to indicate a function that never returns
// const error = (message: string): never => {
//   throw new Error(message);
// };
// console.log(error('some error'));
/* advanced types: union, literal, nullable, type alias, intersection */
//// use union to allow multiple types
// let unionType: string | number = 'Hello';
// unionType = 2;
// unionType = true; // This will throw an error
// console.log(unionType);
//// use literal to allow specific values
// let literalType: 'Hello' | 'World' = 'Hello';
// literalType = 'World';
// literalType = 'Hi'; // This will throw an error
// console.log(literalType);
//// use nullable to allow null or undefined
// let nullableType: string | null | undefined = 'Hello';
// nullableType = null;
// function func(x: string | null): void {
//   if (x === null) {
//     console.log('it is null');
//   } else {
//     console.log(x);
//   }
// }
// func(nullableType);
//// use alias to create a custom type
// type User = {
//   first_name: string;
//   age: number;
//   isEmployee: boolean;
// };
// let user: User = {
//   first_name: 'John',
//   age: 30,
//   isEmployee: true,
// };
//// use intersection to combine multiple types
// type User = {
//   first_name: string;
//   age: number;
//   isEmployee: boolean;
// };
// type Address = {
//   street: string;
//   city: string;
// };
// type UserWithAddress = User & Address;
// let userWithAddress: UserWithAddress = {
//   first_name: 'John',
//   age: 30,
//   isEmployee: true,
//   street: '123 Main St',
//   city: 'New York',
// };
// /* type annotation with arrays */
// let numbers: number[] = [1, 2, 3, 4];
// let strings: string[] = ['Hello', 'World'];
// let mixed: (number | string)[] = [1, 'Hello', 2, 'World'];
// let users: User[] = [
//   { first_name: 'John', age: 30, isEmployee: true },
//   { first_name: 'Jane', age: 25, isEmployee: false },
// ];
// let usersWithAddress: UserWithAddress[] = [
//   {
//     first_name: 'John',
//     age: 30,
//     isEmployee: true,
//     street: '123 Main St',
//     city: 'New York',
//   },
//   {
//     first_name: 'Jane',
//     age: 25,
//     isEmployee: false,
//     street: '456 Elm St',
//     city: 'Los Angeles',
//   },
// ];
// console.log(numbers, strings, mixed, users, userWithAddress);
//// Tuple type
// let tuple: [string, number, boolean] = ['Hello', 2, true];
// tuple = ['World', 3, false]; // This will work
// tuple = [2, 'Hello', false]; // This will throw an error
// console.log(tuple);
// let tupleWithOptional: [string, number?] = ['Hello'];
// tupleWithOptional = ['World']; // This will work
// tupleWithOptional = ['World', 3]; // This will also work
// tupleWithOptional = [3]; // This will throw an error
// console.log(tupleWithOptional);
// let tupleWithRest: [string, ...number[]] = ['Hello', 1, 2, 3];
// tupleWithRest = ['World', 4, 5, 6]; // This will work
// tupleWithRest = ['World', 4, 5, 6, 7]; // This will also work
// tupleWithRest = ['World', 'Hello']; // This will throw an error
// console.log(tupleWithRest);
// let tupleWithOptionalAndRest: [string, number?, ...boolean[]] = ['Hello'];
// tupleWithOptionalAndRest = ['World']; // This will work
// tupleWithOptionalAndRest = ['World', 3]; // This will also work
// tupleWithOptionalAndRest = ['World', 3, true, false]; // This will also work
// tupleWithOptionalAndRest = [3]; // This will throw an error
// console.log(tupleWithOptionalAndRest);
/* Enums */
//// Enums are a way to define a set of named constants
// enum Direction {
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT',
// }
// let direction: Direction = Direction.Up;
// console.log(direction); // Output: UP
/* Interfaces */
//// interface methods and parameters
// interface Animal {
//   name: string;
//   speak(sound: string): void;
// }
// const dog: Animal = {
//   name: 'Buddy',
//   speak(sound: string) {
//     console.log(`${this.name} says ${sound}`);
//   },
// };
// dog.speak('Woof');
//// ReOpen the interface and use cases
// interface Person {
//   name: string;
// }
// Reopen Person to add more properties
// interface Person {
//   age: number;
// }
// const user: Person = { name: 'Alice', age: 28 };
// console.log(user);
//// Built-in interface
// let arr: Array<number> = [1, 2, 3]; // Array<T> is a built-in interface
// arr.forEach((num) => console.log(num));
//// HTML imageElement
// let img: HTMLImageElement = document.createElement('img');
// img.src = 'image.png';
// document.body.appendChild(img);
// (Uncomment above lines to use in browser)
//// Interface vs type Aliases
// interface Car {
//   brand: string;
// }
// type Bike = {
//   brand: string;
// };
// const myCar: Car = { brand: 'Toyota' };
// const myBike: Bike = { brand: 'Yamaha' };
// console.log(myCar, myBike);
//// interface reade only
// interface ReadonlyPerson {
//   readonly name: string;
//   readonly age: number;
// }
// const person: ReadonlyPerson = { name: 'Alice', age: 30 };
// person.name = 'Bob'; // This will throw an error
// person.age = 31; // This will also throw an error
// console.log(person);
//// when to use type and when to use an interface
// Use interface when you want to define a structure for an object
// Use type when you want to define a union or intersection type
// type StringOrNumber = string | number;
// interface User {
//   name: string;
//   age: number;
// }
// interface Admin extends User {
//   role: string;
// }
// const admin: Admin = {
//   name: 'Alice',
//   age: 30,
//   role: 'Admin',
// };
// console.log(admin);
//// HTMLImageElement
// HTMLImageElement is used to create and manipulate image elements in the DOM
// It is a built-in interface in TypeScript that represents an HTML <img> element
// It provides properties and methods to work with images, such as src, alt, width, height, and more
// You can create an image element using document.createElement('img') and set its properties like src, alt, width, and height
// You can also append the image
// let img: HTMLImageElement = document.createElement('img');
// img.src = 'image.png';
// img.alt = 'An image';
// img.width = 200;
// img.height = 200;
// document.body.appendChild(img);
/* Classes */
//// access modifier
// Access modifiers control the visibility of class members used to encapsulate data and methods
// class Animal {
//   private name: string;
//   protected age: number;
//   public species: string;
//   constructor(name: string, age: number, species: string) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }
//   protected makeSound(): void {
//     console.log(`${this.name} makes a sound.`);
//   }
//   protected getAge(): number {
//     return this.age;
//   }
//   public getSpecies(): string {
//     return this.species;
//   }
// }
// class Dog extends Animal {
//   constructor(name: string, age: number) {
//     super(name, age, 'Dog');
//   }
//   public bark(): void {
//     this.makeSound();
//   }
// }
// const dog = new Dog('Buddy', 3);
// dog.bark();
// console.log(dog.getSpecies());
// dog.makeSound(); // This will throw an error because makeSound is protected
//// class static members
// Static members are shared across all instances of a class use it to define properties or methods that are not tied to a specific instance
// class Animal {
//   static speciesCount: number = 0;
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//     Animal.speciesCount++;
//   }
//   static getSpeciesCount(): number {
//     return Animal.speciesCount;
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   speak(sound: string): void {
//     console.log(`${this.name} says ${sound}`);
//   }
// }
// const dog = new Dog('Buddy');
// console.log(Animal.getSpeciesCount());
//// Abstract classes
// Abstract classes are classes that cannot be instantiated directly
// use abstract classes to define a common interface for a group of related classes
// abstract class Animal {
//   abstract name: string;
//   abstract speak(sound: string): void;
// }
// class Dog extends Animal {
//   name: string;
//   constructor(name: string) {
//     super();
//     this.name = name;
//   }
//   speak(sound: string): void {
//     console.log(`${this.name} says ${sound}`);
//   }
// }
// const dog = new Dog('Buddy');
// dog.speak('Woof!');
//// Polymorphism
// Polymorphism allows you to use a common interface for different classes used to define a common interface for a group of related classes
// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   speak(sound: string): void {
//     console.log(`${this.name} says ${sound}`);
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   speak(sound: string): void {
//     console.log(`${this.name} barks ${sound}`);
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   speak(sound: string): void {
//     console.log(`${this.name} meows ${sound}`);
//   }
// }
// const animals: Animal[] = [new Dog('Buddy'), new Cat('Whiskers')];
// animals.forEach((animal) => {
//   animal.speak('Hello');
// });
//// what is the deference between a Class and an Interface
// A class is a blueprint for creating objects that encapsulate data and behavior
// An interface is a contract that defines the structure of an object without providing implementation
/* Generics */
//// Generics allow you to create reusable components that can work with any data type
// When to use generics
// Use generics when you want to create a function or class that can work with multiple data
// types without losing type safety
//// Generics
// function identity<T>(arg: T): T {
//   return arg;
// }
// const result = identity<string>('Hello');
// console.log(result); // Output: Hello
// const numberResult = identity<number>(42);
// console.log(numberResult); // Output: 42
//// Generics Multiple types
//// use Multiple types in generics when you want to create a function or class that can work with multiple data types
// function combine<T, U>(arg1: T, arg2: U): [T, U] {
//   return [arg1, arg2];
// }
// const combinedResult = combine<string, number>('Hello', 42);
// console.log(combinedResult); // Output: ['Hello', 42]
//// Generics Classes
//// Use generics in classes when you want to create a class that can work with multiple data
// class Box<T = string> {
//   private content: T;
//   constructor(content: T) {
//     this.content = content;
//   }
//   getContent(): T {
//     return this.content;
//   }
// }
// const stringBox = new Box<string>('Hello');
// console.log(stringBox.getContent()); // Output: Hello
//// Generics And Interface
//// use generics in interfaces when you want to define a structure that can work with multiple data types
// interface Pair<T, U> {
//   first: T;
//   second: U;
// }
// const pair: Pair<string, number> = {
//   first: 'Hello',
//   second: 42,
// };
// console.log(pair); // Output: { first: 'Hello', second: 42 }
//// Type Assertions
//// Type assertions allow you to tell the TypeScript compiler to treat a value as a specific type
// let someValue: any = 'Hello';
// let strLength: number = (someValue as string).length;
// console.log(strLength); // Output: 5
// let anotherValue: any = 42;
// let numValue: number = <number>anotherValue;
// console.log(numValue); // Output: 42
/* TS Debugging */
//// Debugging in TypeScript
// Use console.log to print values to the console
// Use breakpoints in your IDE to pause execution and inspect variables
// Use the debugger statement to pause execution and inspect variables
// Use the TypeScript compiler options to enable source maps for better debugging experience
// Use the --sourceMap flag when compiling TypeScript to generate source maps
// Use the --watch flag to automatically recompile TypeScript files on changes
// Use the --noEmit flag to check for type errors without generating output files
// Use the --strict flag to enable strict type checking
// Use the --noImplicitAny flag to disallow variables with an implicit 'any' type
// Use the --noUnusedLocals flag to disallow unused local variables
// Use the --noUnusedParameters flag to disallow unused function parameters
// Use the --noImplicitReturns flag to disallow functions that do not return a value
// Use the --noFallthroughCasesInSwitch flag to disallow fallthrough cases in switch
console.log(123);
//# sourceMappingURL=index.js.map
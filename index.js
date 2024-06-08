"use strict";
// spread operator 
// // Array
// let fruit1: string[] = ["mango","cherry","kiwi"]
// let fruit2: string[] = ["watermelon","papaya","stawberry"]
// let fruits: string[] = [...fruit1 , ...fruit2]
// console.log(fruits);
// object 
let person = {
    name: "areeba",
    gender: "female",
    isStudent: true
};
let person2 = Object.assign(Object.assign({}, person), { name: "razia" });
console.log(person);
console.log(person2);

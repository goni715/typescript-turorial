"use strict";
console.log("This is typescript code");
// function display(message: string) {
//     console.log("Hello display")
// }
//error show because there is no parameter used
//function signature
let userInfo1;
let userInfo2;
let userInfo3;
userInfo1 = () => {
    console.log("Osman Goni is 23 years old");
};
userInfo2 = (value) => {
    console.log(`${value} is 1 year old`);
};
userInfo3 = (name, age) => {
    return `${name} is ${age} years old`;
};
let users = [];
let user1 = {
    id: 201,
    name: "Osman Goni",
    age: 23
};
let user2 = {
    id: 202,
    name: "Evan Ahmed",
    age: 1
};
// users.push(user1)
// users.push(user2)
const printUserInfo = (data) => {
    console.log(`userId = ${data.id}, name = ${data.name}, age = ${data.age}`);
};
users.forEach((user) => printUserInfo(user));
//Narrowing Types
function printTodos(todos) {
    if (typeof todos === "object") {
        todos.map((todo) => console.log(todo));
    }
    else {
        console.log(todos);
    }
}
const todos = ["todo1", "todo2"];
printTodos(todos);
//truthiness narrowing
function printProducts(products) {
    if (products) {
        products.map((todo) => console.log(todo));
    }
    else {
        console.log("There is no products");
    }
}
const products = ["Laptop", "Mobile"];
printProducts(null);
//output = There is no products
let firstName;
let lastName;
//lastName = 123 //error show
lastName = "goni";
//Generics
/*
function printStudentInfo<X, Y>(studentId: X, studentAge: Y) {
    console.log(`user id : ${studentId}`)
}

printStudentInfo(234, 34);
printStudentInfo("19PAD034", "34");
printStudentInfo(true, false);
printStudentInfo({id:566}, {age:23})

 */
//Generics in arrow function
const printStudentInfo = (studentId, studentAge) => {
    console.log(`user id : ${studentId}`);
};
printStudentInfo(234, 34);
printStudentInfo("19PAD034", "34");
printStudentInfo(true, false);
printStudentInfo({ id: 566 }, { age: 23 });

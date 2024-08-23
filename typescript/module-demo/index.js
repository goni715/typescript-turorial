"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {studentAge, studentName} from "./student";
//import {studentAge as age, studentName as name} from "./student";
var Student = require("./student");
var UserClass_1 = require("./UserClass");
// function displayInfo() {
//     console.log(`${studentName} ${studentAge}`)
// }
// function displayInfo() {
//     console.log(`${name} ${age}`)
// }
function displayInfo() {
    console.log("".concat(Student.studentName, " ").concat(Student.studentAge));
}
displayInfo();
//output Evan 23
//class object
var user1 = new UserClass_1.User("goni75", 23);
user1.display();
//output = username: goni75, age: 23

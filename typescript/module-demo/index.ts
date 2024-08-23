//import {studentAge, studentName} from "./student";
//import {studentAge as age, studentName as name} from "./student";
import * as Student from "./student";
import {User} from "./UserClass";


// function displayInfo() {
//     console.log(`${studentName} ${studentAge}`)
// }

// function displayInfo() {
//     console.log(`${name} ${age}`)
// }


function displayInfo() {
    console.log(`${Student.studentName} ${Student.studentAge}`)
}

displayInfo();
//output Evan 23


//class object
let user1 = new User("goni75", 23)
user1.display();
//output = username: goni75, age: 23

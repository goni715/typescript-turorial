"use strict";
class User {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
        this.formatUser = () => {
            return (`name : ${this.fullName}, age: ${this.age}`);
        };
    }
}
let user = new User("Osman Goni", 23);
console.log(user.formatUser());
//output = name : Osman Goni, age: 23

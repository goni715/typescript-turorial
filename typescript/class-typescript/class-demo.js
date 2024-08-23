var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
//class object
var user1 = new User("goni75", 23);
user1.display();
var user2 = new User("evan75", 2);
user2.display();

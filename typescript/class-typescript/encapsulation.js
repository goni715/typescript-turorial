var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    //readonly address: string;
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    ;
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age, ", id: ").concat(this.studentId));
    };
    Student.prototype.setStudentId = function (id) {
        this.studentId = id; //id=new value
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}(User));
//class object
var student1 = new Student("goni75", 23, 230);
//student1.display();
//output = username: goni75, age: 23, id: 230
//console.log(student1.studentId)// not able to access private member/ private property
//modify & access private property
student1.setStudentId(19034);
console.log(student1.getStudentId());
//output= 19034
//access public member part
var user1 = new User("Rakib", 21);
//console.log(user1.userName)//output= Rakib //access public member
user1.userName = "Evan Ahmed"; //modify public member
//console.log(user1.userName); //output= Evan Ahmed
user1.display();
//output = username: Evan Ahmed, age: 21
//we will not able to access & modify protected member
//console.log(user1.age) //error show // not able to access
//user1.age = 23 //error show // not able to modify
//readonly modifier
//console.log(user1.address);
//user1.address="Saidpur" //error show

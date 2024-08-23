
abstract class User{

    userName: string;
    age: number;

    constructor(userName:string, age:number) {
        this.userName = userName;
        this.age = age;
    }


    abstract display(): void ;

}



class Student extends User{

    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
    }

}



//class object
let student1 = new Student("goni75", 23, 230);
student1.display();
//output = username: goni75, age: 23, id: 230

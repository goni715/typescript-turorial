
class User{

    userName: string;
    age: number;

    constructor(userName:string, age:number) {
        this.userName = userName;
        this.age = age;
    }


    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`)
    }

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
//let student1 = new Student("goni75", 23) //error show for two parameters/ required 3 parameters
student1.display();
//output= username: goni75, age: 23, id: 230

//
let user2 = new User("goni75", 23)
user2.display();

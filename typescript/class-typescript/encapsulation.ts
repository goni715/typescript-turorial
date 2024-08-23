
class User{

    public userName: string;
    protected age: number;
    //readonly address: string;



    constructor(userName:string, age:number) {
        this.userName = userName;
        this.age = age;
    }


     display(): void{
         console.log(`username: ${this.userName}, age: ${this.age}`)
     };

}



class Student extends User{

    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`)
    }

    setStudentId(id: number): void{
        this.studentId=id; //id=new value
    }

    getStudentId(): number {
        return this.studentId
    }

}



//class object
let student1 = new Student("goni75", 23, 230);
//student1.display();
//output = username: goni75, age: 23, id: 230
//console.log(student1.studentId)// not able to access private member/ private property

//modify & access private property
student1.setStudentId(19034);
console.log(student1.getStudentId())
//output= 19034



//access public member part
let user1 = new User("Rakib", 21);
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
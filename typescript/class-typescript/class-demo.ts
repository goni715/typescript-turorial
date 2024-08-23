
class User{

    //properties, methods, constructor

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

//class object
let user1 = new User("goni75", 23)
user1.display();

//class object
let user2 = new User("evan75", 2);
user2.display();
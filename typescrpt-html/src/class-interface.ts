interface IUserFormatter {
    formatUser : () => string
}


class User implements IUserFormatter{

    constructor(private fullName: string, private age : number) {}

    formatUser = () =>{
        return (`name : ${this.fullName}, age: ${this.age}`)
    }
}

let user = new User("Osman Goni", 23);

console.log(user.formatUser());
//output = name : Osman Goni, age: 23
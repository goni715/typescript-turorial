console.log("This is typescript code");



// function display(message: string) {
//     console.log("Hello display")
// }

//error show because there is no parameter used


//function signature

let userInfo1 : () => void;
let userInfo2 : (name: string) => void;
let userInfo3 : (name: string, age:number) => string;


userInfo1 = () => {
    console.log("Osman Goni is 23 years old");
}

userInfo2 = (value : string) => {
    console.log(`${value} is 1 year old`);
}

userInfo3 = (name : string, age: number) => {
    return `${name} is ${age} years old`;
}


//userInfo1();

//userInfo2("Evan Ahmed");
//output = Evan Ahmed 1 year old


//console.log(userInfo3("Marjan Hossain", 7));
//output = Marjan Hossain is 7 years old



//without interface type
/*
let users : {
    id:number,
    name: string,
    age: number
}[] = [];

let user1 : {
    id: number,
    name: string,
    age: number
} = {
    id: 201,
    name: "Osman Goni",
    age:23
}


let user2 : {
    id: number,
    name: string,
    age: number
} = {
    id: 202,
    name: "Evan Ahmed",
    age: 1
}

 */


//with interface type

interface IUser{
    id: number;
    name: string;
    age: number;
}

let users: IUser[] = [];


let user1 : IUser = {
    id: 201,
    name: "Osman Goni",
    age:23
}


let user2 : IUser = {
    id: 202,
    name: "Evan Ahmed",
    age: 1
}





// users.push(user1)
// users.push(user2)


const printUserInfo = (data : IUser)  => {
    console.log(`userId = ${data.id}, name = ${data.name}, age = ${data.age}`)
}

users.forEach((user)=> printUserInfo(user))






//Narrowing Types

function printTodos(todos : string[] | string) : void {
    if(typeof todos === "object"){
        todos.map((todo)=> console.log(todo))
    }
    else{
        console.log(todos)
    }
}

const todos = ["todo1", "todo2"];

printTodos(todos);



//truthiness narrowing
function printProducts(products : string[] | null) : void {
    if(products){
        products.map((todo)=> console.log(todo))
    }
    else{
        console.log("There is no products");
    }
}

const products = ["Laptop", "Mobile"];

printProducts(null);
//output = There is no products

let firstName: string;
let lastName: typeof firstName;
//lastName = 123 //error show
lastName="goni"






//Generics
/*
function printStudentInfo<X, Y>(studentId: X, studentAge: Y) {
    console.log(`user id : ${studentId}`)
}

printStudentInfo(234, 34);
printStudentInfo("19PAD034", "34");
printStudentInfo(true, false);
printStudentInfo({id:566}, {age:23})

 */

//Generics in arrow function
const printStudentInfo = <X, Y> (studentId: X, studentAge: Y) => {
    console.log(`user id : ${studentId}`)
}

printStudentInfo(234, 34);
printStudentInfo("19PAD034", "34");
printStudentInfo(true, false);
printStudentInfo({id:566}, {age:23})
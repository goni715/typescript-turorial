//array of objects
// let users: object[];
// users=[]
//
// let user1 : {userName: string, userId: number, address? : string};
// user1 = {
//     userName:"goni",
//     userId:4
// }
//
// let user2 : {userName: string, userId: number, address? : string};
// user2 = {
//     userName:"evan",
//     userId:5,
//     address: "Saidpur"
// }


//custom-type;

type User = {userName:string, userId:number}
let users: User[]; //array of User object
users=[]

let user1 : User;
user1 = {
    userName:"goni",
    userId:4
}


let user2 : User;
user2 = {
    userName:"evan",
    userId:5
}

users.push(user1)
users.push(user2)
//console.log(users)
//output
 //   [ { userName: 'goni', userId: 4 }, { userName: 'evan', userId: 5 } ]



type RequestType = "GET" | "POST";
let getRequest:RequestType;
getRequest = "GET";


function requestHandler(requestType:RequestType) {
    console.log(requestType)
}

requestHandler("GET");
requestHandler("POST");
//requestHandler("get") // error show
//requestHandler("post"); //error show

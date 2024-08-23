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
var users; //array of User object
users = [];
var user1;
user1 = {
    userName: "goni",
    userId: 4
};
var user2;
user2 = {
    userName: "evan",
    userId: 5
};
users.push(user1);
users.push(user2);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
requestHandler("POST");
//requestHandler("get") // error show
//requestHandler("post"); //error show

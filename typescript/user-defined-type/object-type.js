var user;
user = {
    name: "goni",
    id: 230,
    address: "Saidpur"
};
//array of objects
var users;
users = [
    { name: "Goni", roll: 230, address: "Saidpur" },
    { name: "Evan", roll: 231, address: "Nilphamari" },
    { name: "Marjan", roll: 232, address: "Chowmohoni" }
];
var user1;
user1 = {
    userName: "goni",
    userId: 4
};
var user2;
user2 = {
    userName: "evan",
    userId: 5,
    address: "Saidpur"
};
var members;
members = [];
members.push(user1);
members.push(user2);
console.log(members);
//output =
/*
    [
        { userName: 'goni', userId: 4 },
        { userName: 'evan', userId: 5, address: 'Saidpur' }
    ]
*/

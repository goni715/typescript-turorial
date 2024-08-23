let user: object;
user={
    name:"goni",
    id:230,
    address: "Saidpur"
}


//array of objects
let users: object[];
users =[
    {name: "Goni", roll:230, address:"Saidpur"},
    {name: "Evan", roll:231, address:"Nilphamari"},
    {name: "Marjan", roll:232, address:"Chowmohoni"}
]


let user1 : {userName: string, userId: number, address? : string};
user1 = {
    userName:"goni",
    userId:4
}

let user2 : {userName: string, userId: number, address? : string};
user2 = {
    userName:"evan",
    userId:5,
    address: "Saidpur"
}

let members: object[];
members=[];

members.push(user1);
members.push(user2);
console.log(members)

//output =
/*
    [
        { userName: 'goni', userId: 4 },
        { userName: 'evan', userId: 5, address: 'Saidpur' }
    ]
*/

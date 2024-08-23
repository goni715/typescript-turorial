//built-in data type: number, string, boolean, void, undefined, null

let id; //any type
let userId: number;
let userName: string;
let isActivated: boolean;

userId=102;
userName="osman goni";
//userName=778 //error show
isActivated=true;


console.log(userId);
console.log(userName)
console.log(isActivated)


//data-type:void

function display(): void {
    console.log("This is display part");
}

display()


const displayName = ():void => {
    console.log("display name")
}

displayName()
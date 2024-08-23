//let userId: string | number | boolean; //union data type
var userId; //union data type
userId = "101";
userId = 202;
userId = true;
//type-in-function
function displayUserInfo(userId) {
    console.log(userId);
}
displayUserInfo("204");
displayUserInfo(204);

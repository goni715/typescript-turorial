// enum - store constants, duplicate value is not allowed
//enum types: numeric, string, heterogeneous
//numeric type
// enum RequestType {
//     readData,
//     saveData,
//     deleteData
// }
//
// console.log(RequestType)
//output
/*
{
    '0': 'readData',
    '1': 'saveData',
    '2': 'deleteData',
    readData: 0,
    saveData: 1,
    deleteData: 2
}
 */
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.readData); // output=1
console.log(RequestType["readData"]); // output=1
//output
/*
{
    '1': 'readData',
    '3': 'saveData',
    '4': 'deleteData',
    readData: 1,
    saveData: 3,
    deleteData: 4
}
 */
//string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.deleteData); //output= Delete_Data
console.log(RequestType2.readData); //output= Read_Data
//heterogeneous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Data";
    RequestType3["deleteData"] = "Delete_Data";
    RequestType3[RequestType3["id"] = 101] = "id";
    RequestType3[RequestType3["roll"] = 230] = "roll";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.deleteData); //output = Delete_Data
console.log(RequestType3.id); //output= 101

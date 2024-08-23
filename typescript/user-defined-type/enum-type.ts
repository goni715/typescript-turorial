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


enum RequestType {
    readData = 1,
    saveData = 3,
    deleteData
}

console.log(RequestType)
console.log(RequestType.readData) // output=1
console.log(RequestType["readData"]) // output=1

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
enum RequestType2 {
    readData = "Read_Data",
    deleteData = "Delete_Data"
}

console.log(RequestType2.deleteData) //output= Delete_Data
console.log(RequestType2.readData) //output= Read_Data



//heterogeneous enum
enum RequestType3 {
    readData = "Read_Data",
    deleteData = "Delete_Data",
    id = 101,
    roll = 230
}

console.log(RequestType3.deleteData) //output = Delete_Data
console.log(RequestType3.id) //output= 101
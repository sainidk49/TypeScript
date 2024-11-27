var score = 33; // Initially a number or string
score = 44; // Now a number
score = "33"; // Now a string
var data; // you can take 2 object data type
data = { _id: "abcd123", name: "deepak123", age: 25 };
data = { _id: "abcd123", userName: "deepak123", age: 25 };
//////////// identify parameter ///////////
function passPerameter(id) {
    if (typeof id === 'string') {
        id = id.toUpperCase();
    }
    return id;
}
// console.log(passPerameter(123))
// console.log(passPerameter("deepak"))
///////////// array //////////////
var arr1 = [1, 2, 3, 4];
var arr2 = ["1", "2", "3", "4"];
var arr3 = [1, 2, 3, 4]; //// its allow only on type at a time
var arr4 = [1, 2, 3, "4"]; //// its allow both at a time
var arr5 = [1, 2, 3, "4", true]; //// u can use many type or data in array
///////////// variable input restriction //////////////
var seatAllowCation;
seatAllowCation = "midle"; //// it allows 
// seatAllowCation = "xyz" //// it not allow

////////////// classic and normal funtion ///////
var arrNum1 = [1, 2, 3, 4, 5, 6,];
function getProducts1(arr) {
    return arr;
}
// console.log(getProducts1(arrNum1))
////////////// arrow funtion ///////
var arrNum2 = [1, 2, 3, 4, 5, "ajay",];
var getProducts2 = function (arr) { return arr; };
// console.log(getProducts2(arrNum2))
/////////// use array and any type of ////////
var arrNum3;
arrNum3 = [1, 2, 3, 4, 5, 6];
function getProducts3(arr) {
    return arr;
}
// console.log(getProducts3(arrNum3))
// console.log(getProducts3("hello world"))
function getProducts5(val) {
    val = "hello shiva";
    return val;
}
console.log(getProducts5("arrNum5"));

var score = [];
var names = [];
//// by using this you can take any tppe of data and return any type of dada ////////
////// also you can use specific data
function generic1(val) {
    val = Number(val);
    return val;
}
// console.log(generic1("25"))
// console.log(typeof generic1("25"))
//// same as first take any type of and retur any type of
function generic2(val) {
    val = Number(val);
    return val;
}
// console.log(generic2("25"))
// console.log(typeof generic2("25"))
//// by using this it take data type which you send and return in same data type
//// if you want to send number it also return number, can't be change data type while retuning
//// same as string, boolean and any
function generic3(val) {
    return val;
}
// console.log(generic3("25"))
// console.log(typeof generic3("25"))
function generic4(val) {
    return val;
}
console.log(generic4("25"));
console.log(typeof generic4("25"));

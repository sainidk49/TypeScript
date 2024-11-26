
/////////////////// normal function ////////////////////////////
function userRegister(name: String, email: String, age: Number, isMale: boolean = true) {
    console.log(name, email, age, isMale)
}
// userRegister("deepak", "dpksaini49@gmail.com", 3)
// userRegister("deepak", "dpksaini49@gmail.com", 5)


/////////////////// arrow function ////////////////////////////
var userLogin = (email: String, password: String) => {
    console.log(email, password)
}
// userLogin("name", "dpksaini12")


//////////////// return case ////////////////
// ========== return any ===================
function returnAny(num1: number, num2: number) { // if you want to return any
    // return num1 + num2
    return "hello"
}
// console.log(returnAny(2, 2));


// ========== return number ===================
function returnNum(num1: number, num2: number): number { // if you want to return only a number
    return num1 + num2
}
// console.log(returnNum(2, 2));


// ========== return string ===================
function returnString(num1: number, num2: number): string { // if you want to return only a string
    return "string"
}
// console.log(returnString(2, 2));


// ========== return more data type of  ===================
function returnMany(num1: number, num2: number): string | number { // if you want to return more type of data
    if (num1 > num2) {
        return num1
    }
    return `${num2} greater than ${num1}`
}
// console.log(returnMany(1, 2));



// ========== type checking array data  ===================
// let userData = ["deepak", "ajay", "yesh", "sonu"]
// userData.forEach(user => { // auto detect array data type string, number or etc.
//     console.log(`i am ${user}` )
// })


// ====== function could be a not return any type ======
function consoleError(message: string): void{
    console.log(message);
}
console.log(consoleError("Not found 404"));



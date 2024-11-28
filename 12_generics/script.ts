const score: Array<number> = []
const names: Array<string> = []

//// by using this you can take any tppe of data and return any type of dada ////////
////// also you can use specific data
function generic1(val: number | string | boolean): number | string | boolean {
    val = Number(val)
    return val
}
// console.log(generic1("25"))
// console.log(typeof generic1("25"))


//// same as first take any type of and retur any type of
function generic2(val: any): any {
    val = Number(val)
    return val
}
// console.log(generic2("25"))
// console.log(typeof generic2("25"))


//// by using this it take data type which you send and return in same data type
//// if you want to send number it also return number, can't be change data type while retuning
//// same as string, boolean and any
function generic3<Type>(val: Type): Type {
    return val
}
// console.log(generic3("25"))
// console.log(typeof generic3("25"))

///// you can use own keyword what you want
function generic4<data>(val: data): data {
    return val
}
console.log(generic4("25"))
console.log(typeof generic4("25"))
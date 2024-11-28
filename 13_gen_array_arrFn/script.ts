
////////////// classic and normal funtion ///////
let arrNum1: number[] = [1, 2, 3, 4, 5, 6,]
function getProducts1<T>(arr: T[]): T[] {
    return arr
}
// console.log(getProducts1(arrNum1))


////////////// arrow funtion ///////
let arrNum2: any[] = [1, 2, 3, 4, 5, "ajay",]
const getProducts2 = <T>(arr: T[]): T[] => arr;
// console.log(getProducts2(arrNum2))


/////////// use array and any type of ////////
let arrNum3: number[];
arrNum3 = [1, 2, 3, 4, 5, 6]
function getProducts3<T>(arr: T[] | T): T[] | T {
    return arr
}
// console.log(getProducts3(arrNum3))
// console.log(getProducts3("hello world"))



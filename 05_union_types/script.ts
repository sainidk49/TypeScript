let score: number | string = 33; // Initially a number or string
score = 44; // Now a number
score = "33"; // Now a string

type User = {
    readonly _id: string,
    name: string,
    age: number
}

type Admin = {
    readonly _id: string,
    userName: string,
    age: number
}

let data: User | Admin; // you can take 2 object data type
data = { _id: "abcd123", name: "deepak123", age: 25 }
data = { _id: "abcd123", userName: "deepak123", age: 25 }


//////////// identify parameter ///////////
function passPerameter(id: number | string): number | string{
    if (typeof id === 'string') {
        id = id.toUpperCase();
    }
    return id
}
// console.log(passPerameter(123))
// console.log(passPerameter("deepak"))


///////////// array //////////////
const arr1: number[] = [1, 2, 3, 4]
const arr2: string[] = ["1", "2", "3", "4"]
const arr3: string[] | number[] = [1, 2, 3, 4] //// its allow only on type at a time
const arr4: (string | number)[] = [1, 2, 3, "4"] //// its allow both at a time
const arr5: (string | number | boolean)[] = [1, 2, 3, "4", true] //// u can use many type or data in array


///////////// variable input restriction //////////////
let seatAllowCation: "midle" | "upper" | "lower";
seatAllowCation = "midle" //// it allows 
// seatAllowCation = "xyz" //// it not allow
// seatAllowCation = 123 //// it not allow
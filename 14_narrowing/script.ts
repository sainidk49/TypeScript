function isString(value: string | number): value is string {
    return typeof value === "string";
}
// console.log(isString(5)) //// => return true or false


function example(value: string | number): string | number {
    if (isString(value)) {
        return value.toUpperCase()
    }
    return value.toFixed(2)
}
console.log(example("hello string"))
console.log(example(12345))
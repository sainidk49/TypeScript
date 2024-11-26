let userData = {
    name: "User",
    age: 36,
    isAuth: true,
}

// ========== check paameter type and return =============
// function createUser({ name, age, isAuth }: { name: string, age: number, isAuth: boolean }) {
//     return { name, age, isAuth }
// }
// const { name:userName } = createUser(userData);
// console.log(userName); 

// ============= return value as type checking and return what you want ============
function createUser({ name, age, isAuth }: { name: string, age: number, isAuth: boolean }): {name: string, age:number} {
    return { name, age }
}

const { name: userName, age } = createUser(userData);
console.log(userName, age); 

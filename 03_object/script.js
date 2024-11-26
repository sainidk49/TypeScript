var userData = {
    name: "User",
    age: 36,
    isAuth: true,
};
// ========== check paameter type and return =============
// function createUser({ name, age, isAuth }: { name: string, age: number, isAuth: boolean }) {
//     return { name, age, isAuth }
// }
// const { name:userName } = createUser(userData);
// console.log(userName); 
// ============= return value as type checking and return what you want ============
function createUser(_a) {
    var name = _a.name, age = _a.age, isAuth = _a.isAuth;
    return { name: name, age: age };
}
var _a = createUser(userData), userName = _a.name, age = _a.age;
console.log(userName, age);

class User {
    ///////// u can use as it
    // constructor(public name: string, public email: string) {
      
    // }


    ///////// u can use also as it
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email
    }
    public returnValue = function (userId: number): { userId: number, name: string } {
        return { userId, name: this.name }
    }
    private returnId = function (userId: number): { userId: number, name: string } {
        return { userId, name: this.name }
    }
}

const user = new User("deepak", "dpksaini49")
console.log(user.returnValue(123)) // acceptable

const userID = new User("deepak", "dpksaini49")
// console.log(user.returnId(123)) // not acceptable

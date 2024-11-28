class Parent {
    ///////// u can use as it
    // constructor(public name: string, public email: string) {

    // }


    ///////// u can use also as it
    name: string;
    email: string;
    protected age:number = 25; ////// can be use in child 
    // private age:number = 25; ////// cann't be use in child 
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email
    }
    public returnValue(userId: number): { userId: number, name: string } {
        return { userId, name: this.name }
    }
    private returnId(userId: number): { userId: number, name: string } {
        return { userId, name: this.name }
    }
}

class Child extends Parent {
    constructor(name: string, email: string) {
        super(name, email)
    }

    getParentData(): string {
        return `name: ${this.name}, email: ${this.email}, age: ${this.age}`
    }
}

const user = new Parent("deepak", "dpksaini49")
console.log(user.returnValue(123)) // acceptable

const userID = new Parent("deepak", "dpksaini48")
// console.log(user.returnId(123)) // not acceptable this function is private

const childData = new Child("Rahul", "rahul@gmail.com");
console.log(childData.getParentData())

export default {}
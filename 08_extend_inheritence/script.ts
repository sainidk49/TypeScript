class Parent {
    public age: number = 30;
    private userId: number = 30;
    constructor(public name: string, public email: string) { }

    getUser(): string {
        return this.name;
    }
}

class Child extends Parent { //////////// inheritence
    constructor(name: string, email: string) {
        super(name, email);
    }

    getAge(): number {
        return this.age
    }

    // getUserID(): number {
    //     return this.userId /////// this is not acceptable beacouse of it's a private that only use their own class
    // } 
}

const user = new Child("deepak", "dpksaini49@gmail.com");
console.log(user.getUser());  // Outputs: deepak
console.log(user.getAge());  // Outputs: deepak



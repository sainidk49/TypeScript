class User {
    constructor(public name: string, public email: string) { }

    get returnCourse() {
        return this.name;
    }

    set courseName(course_name: string) {
        this.name = course_name;
    }
}

const user = new User("deepak", "dpksaini49");
console.log(user.returnCourse);
user.courseName = "physics";
console.log(user.returnCourse);

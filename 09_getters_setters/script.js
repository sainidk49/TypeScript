var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "returnCourse", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseName", {
        set: function (course_name) {
            this.name = course_name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("deepak", "dpksaini49");
console.log(user.returnCourse);
user.courseName = "physics";
console.log(user.returnCourse);

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Parent = /** @class */ (function () {
    // private age:number = 25; ////// cann't be use in child 
    function Parent(name, email) {
        this.age = 25; ////// can be use in child 
        this.name = name;
        this.email = email;
    }
    Parent.prototype.returnValue = function (userId) {
        return { userId: userId, name: this.name };
    };
    Parent.prototype.returnId = function (userId) {
        return { userId: userId, name: this.name };
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, email) {
        return _super.call(this, name, email) || this;
    }
    Child.prototype.getParentData = function () {
        return "name: ".concat(this.name, ", email: ").concat(this.email, ", age: ").concat(this.age);
    };
    return Child;
}(Parent));
var user = new Parent("deepak", "dpksaini49");
console.log(user.returnValue(123)); // acceptable
var userID = new Parent("deepak", "dpksaini48");
// console.log(user.returnId(123)) // not acceptable this function is private
var childData = new Child("Rahul", "rahul@gmail.com");
console.log(childData.getParentData());
exports.default = {};

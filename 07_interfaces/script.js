"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardDetails = {
    holderName: "Deepak",
    cardNumber: 1412568974583254,
    CvvNumber: 699
};
var myUser = {
    _id: "id123",
    name: "Deepak",
    email: "dpksaini49",
    mobile: 8077114966,
    isActive: false,
    address: "agapur",
    card: CardDetails,
    trialFn: function (firstNaming) {
        return firstNaming + " " + this.name;
    }
};
function fetchData(_a) {
    var _id = _a._id, name = _a.name, mobile = _a.mobile, trialFn = _a.trialFn;
    return { _id: _id, name: name, mobile: mobile, trialFn: trialFn };
}
var _a = fetchData(myUser), _id = _a._id, userName = _a.name, mobile = _a.mobile, trialFn = _a.trialFn;
var boundTrialFn = trialFn.bind(myUser);
console.log(_id, userName, mobile, boundTrialFn("i am "));
exports.default = {};

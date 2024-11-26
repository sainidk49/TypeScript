// myUser._id = "jkhjkhj" // throgh error while changing id becouse it readonly
var CardDetails = {
    cardName: "Deepak",
    cardNumber: 154578981452,
    cardCvv: 688,
};
var myUser = {
    _id: "abcd1234",
    name: "deepak",
    email: "dpksaini49@gmail.com",
    mobile: 905212548,
    isActive: true,
    card: CardDetails
};
function createUser(obj) {
    return obj;
}
var _a = createUser(myUser), userName = _a.name, email = _a.email, card = _a.card;
console.log(userName, email, card);

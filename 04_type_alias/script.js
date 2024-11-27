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
    card: CardDetails,
    trialFn: function (trial) {
        return trial + " " + this.name;
    }
};
// function createUser({ name, email, card }: User): { name: string, email: string, card?: Card } {
//     return { name, email, card }
// }
function createUser(obj) {
    return obj;
}
var _a = createUser(myUser), userName = _a.name, email = _a.email, card = _a.card, trialFn = _a.trialFn;
var boundTrialFn = trialFn.bind(myUser); // bind `this` to myUser
console.log(userName, email, card, boundTrialFn("I am ")); // Now it works as expected

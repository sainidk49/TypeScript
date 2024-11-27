type User = {
    readonly _id: string,
    name: string | number,
    email: string,
    mobile: number,
    isActive: boolean,
    address?: string, // This is optional
    card?: Card,
    trialFn: (trial: string) => string
}

type Card = {
    cardName: string,
    cardNumber: number,
    cardCvv: number,
}

let CardDetails = {
    cardName: "Deepak",
    cardNumber: 154578981452,
    cardCvv: 688,
}

let myUser: User = {
    _id: "abcd1234",
    name: "deepak",
    email: "dpksaini49@gmail.com",
    mobile: 905212548,
    isActive: true,
    card: CardDetails,
    trialFn: function (trial) {
        return trial + " " + this.name;
    }
}

// function createUser({ name, email, card }: User): { name: string, email: string, card?: Card } {
//     return { name, email, card }
// }


function createUser(obj: User): User {
    return obj;
}

const { name: userName, email, card, trialFn } = createUser(myUser);
const boundTrialFn = trialFn.bind(myUser);  // bind `this` to myUser

console.log(userName, email, card, boundTrialFn("I am "));  // Now it works as expected
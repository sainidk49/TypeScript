type User = {
    readonly _id: string,
    name: string,
    email: string,
    mobile: number,
    isActive: boolean,
    address?: string ///////// this is optional sign
    card?: Card
}

type Card = {
    cardName: string,
    cardNumber: number,
    cardCvv: number,
}

// myUser._id = "jkhjkhj" // throgh error while changing id becouse it readonly

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
    card: CardDetails
}



// function createUser({ name, email, card }: User): { name: string, email: string, card?: Card } {
//     return { name, email, card }
// }

function createUser(obj: User):  User {
    return obj
}

const { name: userName, email, card } = createUser(myUser);
console.log(userName, email, card); 
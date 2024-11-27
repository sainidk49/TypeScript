interface User {
    readonly _id: string,
    name: string,
    email: string,
    mobile: number,
    isActive: boolean,
    address?: string,
    card?: Card,
    trialFn: (firstNaming: string) => string
}

interface Card {
    holderName: string,
    cardNumber: number,
    CvvNumber: number
}

let CardDetails = {
    holderName: "Deepak",
    cardNumber: 1412568974583254,
    CvvNumber: 699
}

let myUser: User = {
    _id: "id123",
    name: "Deepak",
    email: "dpksaini49",
    mobile: 8077114966,
    isActive: false,
    address: "agapur",
    card: CardDetails,
    trialFn: function (firstNaming) {
        return firstNaming + " " + this.name
    }
}

function fetchData({ _id, name, mobile, trialFn }: { _id: string, name: string, mobile: number, trialFn: (firstNaming: string) => string }) {
    return { _id, name, mobile, trialFn }
}
let { _id, name: userName, mobile, trialFn } = fetchData(myUser)
let boundTrialFn = trialFn.bind(myUser)
console.log(_id, userName, mobile, boundTrialFn("i am "))
export default {}
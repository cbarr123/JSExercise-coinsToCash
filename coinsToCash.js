const piggyBank = {
    quarters: 4,
    nickels: 10,
    dimes: 5,
    pennies: 10,
}
let dollarAmount = 0

function findTotal (bankObject) {
    console.log(bankObject)
    if (bankObject.quarters) {
        let quarters = bankObject.quarters * .25
        dollarAmount += quarters
    }
    if (bankObject.dimes) {
        let dimes = bankObject.dimes * .10
        dollarAmount += dimes
    }
    if (bankObject.nickels) {
        let nickels = bankObject.nickels * .05
        dollarAmount += nickels
    }
    if (bankObject.pennies) {
        let pennies = bankObject.pennies * .01
        dollarAmount += pennies
    }
}
findTotal(piggyBank)

console.log("Dollar Amount", dollarAmount)

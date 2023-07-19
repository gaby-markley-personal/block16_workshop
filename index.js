
// -----------------------------Pseudocode 
// refill cost = refill * cost <------sub total 

// subscriptionCost = refillcost *.75 
//   need an if statement that states if subscription = true, multiply subTotal by .75 (for 25% discount)

// with coupon = refill cost -10 

// grandTotal = 
// Need to figure out how to think about if there is a subscription vs no subscription and how the cost changes 

// declare objects and properties 
// multiply refill by costperrefill, make that the subtotal
// if subscription is true, multiply .25 by the subtotal
// create a constant for coupon where coupon is -10 of the total 
// if subscription is true, multiply subtotal by .75 

// -----------------Constants Given
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


// ----------------------------------Functions 

function subTotal(customer) {

    return customer.pricePerRefill * customer.refills

}

function subDiscount(totalAmount) {

    return totalAmount - totalAmount * 0.25

}
function coupDiscount(totalAmount) {

    return totalAmount - 10

}

function grandTotal(customer) {

    let totalAmount = subTotal(customer)

    if (customer.subscription) {

        totalAmount = subDiscount(totalAmount)
    }
    if (customer.coupon) {

        totalAmount = coupDiscount(totalAmount)

    }
    return totalAmount;
}

// not fully understanding this but this is what my partners wrote soooooo. i could probably use a refresh on template literate 
function custFinalAmount(customer) {
    const finalAmount = grandTotal(customer);
    console.log(`Your grand total is $${finalAmount}.`);
}
// custFinalAmount(timmy)
// custFinalAmount(sarah)
custFinalAmount(rocky)










// customer service function 
// has a subscription 
    // needs if statement
// has coupon
    // needs if statement 
// grand total 






// expected result 
// Timmy => "Your grand total is $65"
// Sarah => "Your grand total is $37.5."
// Rocky => "Your grand total is $102.5"

// -------------------------------Instructions
// Using the following criteria, your first assignment is to create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

// return instead of console.log to get out of the function 


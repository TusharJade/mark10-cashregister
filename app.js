var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var btnOne = document.querySelector("#btnone")
var btnTwo = document.querySelector("#btntwo");
var displayCashGiven = document.querySelector("#display-cashgiven");
var returnChange = document.querySelector("#returnchange")
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".noofnotes");

var availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

btnOne.addEventListener("click", cashGivenShow);

function cashGivenShow() {
    hideMessage();
    if (billAmount.value > 0) {
        btnOne.style.display = "none"
        displayCashGiven.style.display = "block"
    } else {
        showMessage("Amount should be greater than 0")
    }
}

btnTwo.addEventListener("click", table)

function table() {
    hideMessage();
    var givenA = cashGiven.value;
    var biA = billAmount.value;
    if (biA > 0 && givenA > 0) {
        let returnAmt = givenA - biA;
        if (Number(givenA) < Number(biA)) {
            showMessage("Cash entered is lesser than the entered bill amount");
            returnChange.style.display = "none";
            return;
        } else if (returnAmt < 1) {
            showMessage("No amount should be returned.");
            returnChange.style.display = "none";
            return;
        } else {
            var amountToBeReturned = givenA - biA;
            nooof(amountToBeReturned);
        }
    } else {
        showMessage("Enter a valid bill amount and cash given amount.");
    }
}

function nooof(amountToBeReturned) {
    returnChange.style.display = "block";
    for (let i = 0; i < availableNotes.length; i++) {
        var number = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned - number * availableNotes[i];
        noOfNotes[i].innerText = number;
    }
}





function hideMessage(msg) {
    errorMessage.style.display = "none";
}

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}
function handleForm(form) {
    clearErrorMessages();

    let totalBillChecked = checkBillTotal(form.billTotal.value);
    let serviceRatingChecked = checkServiceRating(form.serviceLevel.value);
    let numPayingChecked = checkNumberPaying(form.numPaying.value);

    // If all values in form are valid
    if (totalBillChecked && serviceRatingChecked && numPayingChecked) {
        let tipPercentage = getTipPercentage(form.serviceLevel.value);

        // Calculate tip using billTotal provided and display to user
        let totalWithTip = (form.billTotal.value / 100) * tipPercentage;
        document.getElementById("totalWithTip").innerHTML = totalWithTip;

        // Calculate cost per person and display to user
        let perPerson = totalWithTip / form.numPaying.value;
        document.getElementById("perPerson").innerHTML = perPerson.toFixed(2); // rounds to 2 decimal points
        /*
        I wasn't planning on teaching toFixed()
        so this might be best to leave it out?
        Or something for bonus points?
        */
    }
}

/**
 * Clears all error messages each time the submit button is clicked
 */
function clearErrorMessages() {
    document.getElementById("billTotalMsg").innerHTML = "";
    document.getElementById("serviceLevelMsg").innerHTML = "";
    document.getElementById("numPayingMsg").innerHTML = "";
}


/**
 * Take the value entered by the user and check that it is a valid number.
 * Add feedback for the user is if the number is not greater than one.
 * Return true if the input from the user is valid
 */
function checkBillTotal(total) {
    if (total < 1) {
        let message = document.getElementById("billTotalMsg");
        message.innerHTML = "Please enter a number greater than 0";
        return false;
    } else {
        return true;
    }
}


/**
 * Check that the provided value from the user matches one of the expected values
 * If it does return true
 * If it does not, provide feedback to the user so they can correct their input
 */
function checkServiceRating(level) {
    if (level == "poor" || level === "good" || level === "excellent") {
        return true;
    } else {
        let message = document.getElementById("serviceLevelMsg");
        message.innerHTML = "Please enter either 'poor', 'good' or 'excellent'";
    }
}

/**
 * Check that the number of people paying provided by the user is greater than 0
 * If it is, return true
 * If it is not, provide feedback to the user
 */
function checkNumberPaying(num) {
    if (num < 1) {
        let message = document.getElementById("numPayingMsg");
        message.innerHTML = "Please enter a number greater than 0";
        return false
    } else {
        return num;
    }
}

/**
 * Use the rating of service to determine the overall tip percentage
 * return the tip percentage
 */
function getTipPercentage(level) {
    if (level === "good") {
        return 110;
    } else if (level === "excellent") {
        return 120;
    } else if (level === "poor") {
        return 100;
    }
}
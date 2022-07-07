function handleForm(event) {
    event.preventDefault();

    // clear feedback message
    let feedback = document.getElementById("serviceRatingFeedback");
    feedback.innerHTML = "";

    let form = event.target;
    let serviceRating = form.serviceRating.value;
    let billTotal = form.billTotal.value;

    let serviceRatingValidated = validateServiceRating(serviceRating);

    // If all values in form are valid
    if (serviceRatingValidated) {
        let tipPercentage = getTipPercentage(serviceRating);

        // Calculate tip using billTotal provided and display to user
        let totalWithTip = (billTotal / 100) * tipPercentage;
        document.getElementById("totalWithTip").innerHTML = totalWithTip.toFixed(2);

        // Calculate cost per person and display to user
        let perPerson = totalWithTip / form.numPaying.value;
        document.getElementById("perPerson").innerHTML = perPerson.toFixed(2); // rounds to 2 decimal points
    }
}

/**
 * Check that the provided value from the user matches one of the expected values
 * If it does return true
 * If it does not, provide feedback to the user so they can correct their input
 */
function validateServiceRating(level) {
    if (level === "poor" || level === "good" || level === "excellent") {
        return true;
    } else {
        let message = document.getElementById("serviceRatingFeedback");
        message.innerHTML = "Please enter either 'poor', 'good' or 'excellent'";
        message.style.color = "red";
        return false;
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

function headingOrange() {
    let heading = document.getElementById("heading");
    heading.style = "color: darkorange;";
}

function headingGrey() {
    let heading = document.getElementById("heading");
    heading.style = "color: darkslategrey;";
}

function closeTipulator() {
    document.write("<h1>Thank you for using the Tipulator!<h1>")
}

function moveRight() {
    let tipulator = document.getElementById("tipulator-wrapper");
    tipulator.style = "position: relative; left: 500px;";
}

function moveLeft() {
    let tipulator = document.getElementById("tipulator-wrapper");
    tipulator.style = "position: relative; left: 0px;";
}

const paymentSuccess = false;
const marks = 70;

function enroll() {
    console.log("Course enrollment is in progress.");

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve();
            } else {
                reject("Payment Failed.");
            }
        }, 2000);
    });
}

function progress() {
    console.log("Course on progress...");

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (marks >= 80) {
                resolve();
            } else {
                reject("You could not get enough marks to get the certificate.");
            }
        }, 3000);
    });
}

function getCertificate() {
    console.log("Preparing your certificate...");

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Congrats. you got the certificate.");
        }, 1000);
    });
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
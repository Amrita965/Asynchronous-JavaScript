const paymentSuccess = true;
const marks = 80;

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

async function course() {
    try {
        await enroll();
        await progress();
        const result = await getCertificate();
        console.log(result);
    } catch (error) {
        console.log(error);
    }

    // console.log("Hello");
}

course();
// console.log("Hello");
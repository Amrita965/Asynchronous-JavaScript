function takeOrder(customer, callback) {
    console.log(`Take order for ${customer}`);

    setTimeout(() => {
        callback(customer);
    }, 1000);
}

function processOrder(customer, callback) {
    console.log(`Processing order for ${customer}`)

    setTimeout(() => {
        console.log("Cooking completed");
        console.log(`Order Processed for ${customer}`);
        callback(customer);
    }, 3000);
}

function completeOrder(customer) {
    console.log(`Completed order for ${customer}`);
}

takeOrder("customer 1", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});

takeOrder("customer 2", (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer);
    });
});


// function processOrder(callback) {
//     console.log("Processing order for customer 1");

//     // const currentTime = new Date().getTime();
    
//     // while(currentTime + 3000 >= new Date().getTime());

//     setTimeout(() => {
//         console.log("Order processed for customer 1");
//         callback();
//     }, 3000);

// }

// function completeOrder() {
//     console.log("Completed order for customer 1");
// }

// console.log("Take order for customer 1");
// processOrder(completeOrder);




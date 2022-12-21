const cart = ['watch', 'map', 'shoes'];

const promise = createOrder(cart);

promise.then(function(orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function(orderStatus) {
    console.log(orderStatus);
})
.catch(function(err) {
    console.log(err.message);
})
.then(function() {
    console.log("I will run even after the error");
})

// all those promise which comes before catch .... if they get any error at some point then the
// promise will breake there itself and it won't proceed any further.

// This process is called error handelling.

// console.log(promise); // will show pending because by this time there is no data recieved

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error('Cart is not valid');
            reject(err);
        }
        else {
            const orderId = 12345;
            // make a fake delay of 5 seconds to get the data.
            setTimeout(function() {
                resolve(orderId);
            }, 3000);
            
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        if( typeof orderId === 'number') {
            const status = 'Payment Succesfull';
            resolve(status);
        }
        else {
            const err = new Error('Payment Declined') ;
            reject(err);
        }
    });
}

function validateCart(cart) {
    return true;
}
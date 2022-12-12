// this function xyz() is the callback function for the event click me button.
// this will get called when the click event occur and comes to the call stack.
// put the debugger at the console.log and then press click me button and observe the callstack


// document.getElementById('clickMe')
// .addEventListener("click", function xyz() {
//     console.log('clicked');
// })

// you need to click and count the number of clicks and print them.

function attachEventListner() {
    let count = 1;

    document.getElementById('clickMe')
    .addEventListener("click", function xyz() {
        console.log('clicked', count++);
    })
    
}

attachEventListner();




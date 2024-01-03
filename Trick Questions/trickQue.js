// call something after a particular set of time??

// const someInterval = setInterval(()=> {
//     console.log("Calling after every second")
// }, 1000);

// function clearIntervalFunc(interval){
//     clearInterval(interval);
// }

// clearIntervalFunc(someInterval);

// async await

// async function fetchData() {
//     try {
//         const response = await fetch("apicall");
//         const data = response.json();
//         console.log("data===", data)
//     }
//     catch(error) {
//         console.log("error===", error);
//     }
    
// }

// change the color of this square into red on hover/click

const element = document.getElementById('square');
element.addEventListener('click', handleClick);

function handleClick() {
    // console.log("reached");
    element.style.setProperty('background', 'red');
}
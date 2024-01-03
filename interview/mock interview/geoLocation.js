// console.log("connected");

let p = document.querySelector('p');

function onSuccess(position) {
    p.textContent = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`
    console.log(position);
}

function onError() {
    p.textContent = `Some Error occured, cannot find you.`
}

navigator.geolocation.getCurrentPosition(onSuccess, onError)
// import { data } from "jquery";


// console.log("hello");
const container = document.querySelector('.container')
const URL = "https://api.publicapis.org/entries"

fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(data => loadImages(data))
    .catch(err => console.log(err))



// pt.1 get a batch of images and display to container div

function loadImages(data) {
    let i = 0;

    while(i < 10) {
        const myDiv = document.createElement('h3');
        myDiv.innerHTML = `${data.entries[i].API}`;
        const mySpan = document.createElement('span');
        mySpan.innerHTML = `${data.entries[i].Description}`;
        container.appendChild(myDiv);
        container.appendChild(mySpan);
        i++;
    }
}






// pt2. listen for the click event and load more images
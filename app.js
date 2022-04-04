const number = document.querySelector(".number-input");
const generateButton = document.querySelector(".generate-button");
const imageContainer = document.querySelector(".image-container");
const generatedImage = document.querySelector(".generated");

generateButton.addEventListener("click", fetchImages);

// number.addEventListener("input", getNumberValue); 

// get number value from input field
// function getNumberValue() {
//     // imageContainer.innerHTML = ""; // empty
//     console.log(number.value);
//     num = number.value;
//     // fetchImages(num); 
//     // return num;
// }

// add function to click generate button when enter key is pressed
number.addEventListener("keydown", enterKey);

function enterKey(e) {
    if (e.key == "-") {
        e.preventDefault();
        return false;
    }
    if (e.keyCode === 13) {
        e.preventDefault();
        fetchImages(e);
        // generateButton.click(e);
    }
}

// fetch images from api
function fetchImages() {
    // console.log(num);
    num = number.value; // get number value from input field
    number.focus();
    imageContainer.innerHTML = ""; // empty previous loaded images
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data.message);
            // getNumberValue(data);
            // displayImages(data);
            console.log(data);
            console.log(num);
            // displayImages(data, num); 
            displayImages(data);
        })
        .catch(function (error) {
            console.log(error);
        })

    // generatedImage.innerHTML = "Loading...";

}


// display images
// function displayImages(data, num) { 
function displayImages(data) {
    // console.log(data.message);
    // // console.log(num, data.message);
    let images = data.message;
    // console.log(images);

    // for (let i = 0; i < num; i++) { 
    for (let i = 0; i < images.length; i++) {
        // imageContainer.innerHTML = `<img src="${data.message[i]}"></img>`;

        imageContainer.innerHTML += `<img class="generated" src="${images[i]}"></img>`;

        // another way to add images by creating element
        // let image = document.createElement("img");
        // // image.src = data.message[i];
        // image.src = images[i];
        // console.log(image);
        // imageContainer.append(image);
    }

    // another way to add images
    // images.forEach(src => {
    //     imageContainer.innerHTML += `<img src="${src}"</img>`;
    // })

}
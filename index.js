


function showImage() {
    let image = document.getElementById("myimage")
    if (image.style.display === "none") {
        image.style.display = "block";
        button.textContent = "Hide Image";
    } else {
        image.style.display = "none";
        button.textContent = "Show Image"
    }
}

let button = document.getElementById("mybutton");
button.onclick = showImage;

let images = [
    'bookmark category.gif',
    'phonsa.gif',
    'duo.gif'

];

let button2 = document.getElementById('mybutton');
let image = document.getElementById('myimage');
let currentIndex = 3;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
}

button.addEventListener('click', showNextImage);
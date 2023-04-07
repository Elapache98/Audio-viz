


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


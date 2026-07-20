function upDate(previewPic) {
    console.log("Mouse entered an image.");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    const imageDiv = document.getElementById("image");

    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = `url("${previewPic.src}")`;
}

function unDo() {
    console.log("Mouse left the image.");

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent =
        "Hover over an image below to display here.";
}

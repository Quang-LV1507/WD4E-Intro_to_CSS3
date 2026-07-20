function upDate(previewPic) {
    console.log("The upDate event was triggered.");
    console.log("Alternative text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    const imageDiv = document.getElementById("image");

    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage =
        `url("${previewPic.src}")`;
}

function unDo() {
    console.log("The unDo event was triggered.");

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent =
        "Hover over or focus on an image below to display here.";
}

function addTabFocus() {
    console.log("The page load event was triggered.");

    const images = document.querySelectorAll(".preview");

    for (let index = 0; index < images.length; index++) {
        images[index].setAttribute("tabindex", "0");

        console.log(
            "Added tabindex to image:",
            index + 1
        );
    }
}

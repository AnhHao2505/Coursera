document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        image.addEventListener("mouseover", () => highlightImage(image));
        image.addEventListener("mouseout", () => removeHighlight(image));
    });
});

function highlightImage(image) {
    image.classList.add("highlight");
}

function removeHighlight(image) {
    image.classList.remove("highlight");
}

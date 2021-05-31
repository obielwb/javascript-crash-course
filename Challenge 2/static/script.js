function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.setAttribute("src", "https://thecatapi.com/api/images/get?format=src&type=gif&size=small");
    div.appendChild(image);
}
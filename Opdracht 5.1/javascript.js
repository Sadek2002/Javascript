pics = document.getElementById("pics");
createPicsHolder();
createTijgerImages()

function createPicsHolder() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "tigerpicture";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createTijgerImages() {
    pictureHolder = document.getElementsByClassName("tigerpicture");
    for (var i = 0; i < pictureHolder.length; i++) {
        tijgerPlaatje = document.createElement("img");
        tijgerPlaatje.src = "img/tijger"
    }
}
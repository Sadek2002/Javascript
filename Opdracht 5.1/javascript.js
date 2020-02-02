pics = document.getElementById("pics");
createPicsHolder();
createTijgerImages()

function createPicsHolder() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createTijgerImages() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolder.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_";
        tijgerPlaatje = document.createElement("img");
        tijgerPlaatje.src = "img/tijger" + (i+1) + ".jpg";
        tijgerPlaatje.id = (i+1);
        tijgerPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolder[i].appendChild(favoriet);
        pictureHolder[i].appendChild(tijgerPlaatje);
    }
}

function maakFavoriet(id) {
    console.log("Maak mij favoriet" + id );
    favoriet = document.getElementById("favoriet" + id);
    favoriet.style.backgroundImage = "url('img/heart.jpg')";

}
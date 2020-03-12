// Get the modal
var modal = document.getElementById("modal-image");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("modal-image-image");
var modalImg = document.getElementById("profil-image");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
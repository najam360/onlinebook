function openBook(imageSrc) {
    var modal = document.getElementById("bookModal");
    var modalImg = document.getElementById("bookImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("bookModal");
    modal.style.display = "none";
}

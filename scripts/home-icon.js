$(document).ready(function() {
    // Verificar si la página actual es index.html
    var currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "index.html") {
        // Cambiar el ícono a "casa llena" si estamos en index.html
        $("#homeIcon").attr("src", "logos/house-fill.svg");
    }
});
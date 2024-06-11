$(document).ready(function() {
    // Función para alternar entre el modo claro y el modo oscuro
    function toggleDarkMode() {
        $('body').toggleClass('dark-mode');
        $('.dark-mode-stylesheet').prop('disabled', function(_, val) { return !val; });
    }

    // Agrega un evento click al enlace de configuración en la sidebar
    $('.sidebar a[href="#"]').on('click', function(e) {
        e.preventDefault(); // Evita que se siga el enlace
        toggleDarkMode();
    });
});
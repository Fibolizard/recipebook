$(document).ready(function() {
    var images = $('.background-container img');
    var currentIndex = 0;

    function changeBackground() {
        var nextIndex = (currentIndex + 1) % images.length;
        $(images[currentIndex]).removeClass('active');
        $(images[nextIndex]).addClass('active');
        currentIndex = nextIndex;
    }

    setInterval(changeBackground, 3000); 
    $('body').scrollspy({ target: '#navbarNav', offset: 70 }); //Inicializar scroll-spy
            // Handle button clicks to change descriptions
            $('.button-group button').click(function() {
                var target = $(this).data('target');
                $('.description').removeClass('active');
                $('#' + target).addClass('active');
            });
    
});
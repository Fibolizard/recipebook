$(document).ready(function() {
    var recipes = [
        { name: 'Pasta Carbonara', category: 'Receta' },
        { name: 'Pizza Margherita', category: 'Receta' },
        { name: 'Sushi Vegano', category: 'Receta' }
    ];
    function searchAndDisplayResults(searchQuery) {
        var results = [];

        // Buscar en recetas
        recipes.forEach(function(recipe) {
            if (recipe.name.toLowerCase().includes(searchQuery)) {
                results.push(recipe);
            }
        });

      
    }
   

    // Evento de búsqueda desde el botón en search_results.html
    $('#searchButton').click(function() {
        var searchQuery = $('#searchInput').val().toLowerCase();
        var results = searchAndDisplayResults(searchQuery);

        // Mostrar resultados
        $('.results-container').empty();
        if (results.length > 0) {
            results.forEach(function(result) {
                var resultItem = $('<div class="result-item"></div>');
                resultItem.text(result.name + ' - ' + result.category);
                $('.results-container').append(resultItem);
            });
        } else {
            $('.results-container').text('No se encontraron resultados');
        }
    });
  });
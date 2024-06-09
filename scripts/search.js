$(document).ready(function() {
    // Datos de ejemplo para recetas, restaurantes y proveedores
    var recipes = [
        { name: 'Pasta Carbonara', category: 'Receta' },
        { name: 'Pizza Margherita', category: 'Receta' },
        { name: 'Sushi Vegano', category: 'Receta' }
    ];

    var restaurants = [
        { name: 'La Trattoria', category: 'Restaurante' },
        { name: 'Sushi House', category: 'Restaurante' },
        { name: 'Vegan Delight', category: 'Restaurante' }
    ];

    var providers = [
        { name: 'Organic Farms', category: 'Proveedor' },
        { name: 'Fisherman\'s Co-op', category: 'Proveedor' },
        { name: 'Artisan Bakery', category: 'Proveedor' }
    ];

    function searchAndDisplayResults(searchQuery) {
        var results = [];

        // Buscar en recetas
        recipes.forEach(function(recipe) {
            if (recipe.name.toLowerCase().includes(searchQuery)) {
                results.push(recipe);
            }
        });

        // Buscar en restaurantes
        restaurants.forEach(function(restaurant) {
            if (restaurant.name.toLowerCase().includes(searchQuery)) {
                results.push(restaurant);
            }
        });

        // Buscar en proveedores
        providers.forEach(function(provider) {
            if (provider.name.toLowerCase().includes(searchQuery)) {
                results.push(provider);
            }
        });

        return results;
    }
    $('#searchLink').click(function(e) {
      
            window.location.href = "search_results.html";
        
    });

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
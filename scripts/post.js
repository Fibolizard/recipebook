$(document).ready(function() {
    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    function renderRecipes(recipesToRender = recipes) {
        $('#recipe-list').empty();
        recipesToRender.forEach(function(recipe, index) {
            var recipeCard = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${recipe.thumbnail}" class="card-img-top" alt="Imagen de receta">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.name}</h5>
                            <p class="card-text">${recipe.ingredients}</p>
                            <p class="card-text"><small>${recipe.time}</small></p>
                            <a href="recipe_detail.html?id=${index}" class="card-link">Ver receta</a>
                        </div>
                    </div>
                </div>
            `;
            $('#recipe-list').append(recipeCard);
        });
    }

    function filterRecipes(query) {
        const filteredRecipes = recipes.filter(recipe => {
            const { name, ingredients } = recipe;
            const lowerCaseQuery = query.toLowerCase();
            return (
                name.toLowerCase().includes(lowerCaseQuery) ||
                ingredients.toLowerCase().includes(lowerCaseQuery)
            );
        });
        return filteredRecipes;
    }

    $('#publishRecipeButton').click(function() {
        var name = $('#recipe-name').val();
        var ingredients = $('#recipe-ingredients').val();
        var preparation = $('#recipe-preparation').val();
        var time = $('#recipe-time').val();
        var thumbnail = $('#recipe-thumbnail')[0].files[0];
        var author = localStorage.getItem('loggedInUser') || 'Anónimo';

        if (name && ingredients && preparation && time && thumbnail) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var thumbnailData = e.target.result;

                var recipe = {
                    name: name,
                    ingredients: ingredients,
                    preparation: preparation,
                    time: time,
                    thumbnail: thumbnailData,
                    author: author,
                    comments: [],
                    ratings: []
                };

                recipes.push(recipe);
                localStorage.setItem('recipes', JSON.stringify(recipes));
                renderRecipes();
                $('#publishModal').modal('hide');
                $('#publishForm')[0].reset();
            };
            reader.readAsDataURL(thumbnail);
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    $('#search-button').click(function() {
        const searchQuery = $('#search-input').val().trim();
        if (searchQuery !== '') {
            const filteredRecipes = filterRecipes(searchQuery);
            renderRecipes(filteredRecipes);
        } else {
            renderRecipes(recipes);
        }
    });

    renderRecipes();
});
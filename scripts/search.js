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
    $('#searchButton').click(function() {
        const searchQuery = $('#searchInput').val().trim();
        if (searchQuery !== '') {
            const filteredRecipes = filterRecipes(searchQuery);
            renderRecipes(filteredRecipes);
        } else {
            renderRecipes(recipes);
        }
    });

    renderRecipes();

});
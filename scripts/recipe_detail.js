$(document).ready(function() {
    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    var params = new URLSearchParams(window.location.search);
    var recipeId = params.get('id');
    var recipe = recipes[recipeId];

    if (recipe) {
        $('#recipe-title').text(recipe.name);
        $('#recipe-thumbnail').attr('src', recipe.thumbnail);
        $('#recipe-author').text(recipe.author);
        $('#recipe-ingredients').text(recipe.ingredients);
        $('#recipe-preparation').text(recipe.preparation);
        $('#recipe-time').text(recipe.time);

        function renderComments() {
            $('#comments-section').empty();
            recipe.comments.forEach(function(comment) {
                var commentHtml = `<p>${comment}</p>`;
                $('#comments-section').append(commentHtml);
            });
        }

        function renderRatings() {
            var total = 0;
            recipe.ratings.forEach(function(rating) {
                total += rating;
            });
            var average = (total / recipe.ratings.length) || 0;
            $('#average-rating').text(average.toFixed(2));
        }

        $('#add-comment').click(function() {
            var comment = $('#new-comment').val();
            if (comment) {
                recipe.comments.push(comment);
                localStorage.setItem('recipes', JSON.stringify(recipes));
                renderComments();
                $('#new-comment').val('');
            }
        });

        $('.star').click(function() {
            $('.star').removeClass('selected');
            $(this).addClass('selected');
        });

        $('#submit-rating').click(function() {
            var rating = $('.star.selected').data('value');
            if (rating) {
                recipe.ratings.push(rating);
                localStorage.setItem('recipes', JSON.stringify(recipes));
                renderRatings();
            }
        });

        renderComments();
        renderRatings();
    } else {
        alert('Receta no encontrada');
    }
});

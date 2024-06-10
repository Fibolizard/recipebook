$(document).ready(function() {
    $('#publishRecipeButton').click(function() {
        var name = $('#recipe-name').val();
        var ingredients = $('#recipe-ingredients').val();
        var preparation = $('#recipe-preparation').val();
        var time = $('#recipe-time').val();
        var thumbnail = $('#recipe-thumbnail')[0].files[0];

        if (name && ingredients && preparation && time && thumbnail) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var thumbnailData = e.target.result;

                var recipeCard = `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${thumbnailData}" class="card-img-top" alt="Imagen de receta">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${ingredients}</p>
                                <p class="card-text"><small>${time}</small></p>
                                <a href="#" class="card-link">Ver receta</a>
                            </div>
                        </div>
                    </div>
                `;

                $('#recipe-list').append(recipeCard);
                $('#publishModal').modal('hide');
                $('#publishForm')[0].reset();
            };
            reader.readAsDataURL(thumbnail);
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

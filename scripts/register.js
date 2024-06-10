$(document).ready(function(){
    $('#registerButton').click(function(){
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();

        if(username && email && password){
            var users = JSON.parse(localStorage.getItem('users')) || []; //Guardarlo en un .csv
            var userExists = users.some(user => user.username === username);

            if(!userExists){
                users.push({username: username, email: email, password: password});
                localStorage.setItem('users', JSON.stringify(users));
                alert("Registro exitoso. Ahora puedes iniciar sesión.");
                window.location.href = "login.html";
            } else {
                alert("El usuario ya existe");
            }
        } else {
            alert("Por favor, llena todos los campos");
        }
    });
});

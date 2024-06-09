$(document).ready(function(){
    $('#loginButton').click(function(){
        var username = $('#username').val();
        var password = $('#password').val();

        if(username === "root" && password === "12345"){
            localStorage.setItem('loggedInUser', username);
            window.location.href = "index.html"; 
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });

    $('#login_landing').click(function(){
        window.location.href = "login.html"; 



    });

    //Ocultar iniciar y registrarse cuando hay un usuario con inicio de sesión
    var loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        $('#userProfile').show();
        $('#userName').text(loggedInUser);
        $('#loginButtons').hide();
    } else {
        $('#userProfile').hide();
        $('#loginButtons').show();
    }

});
$(document).ready(function(){
    $('#loginButton').click(function(){
        var username = $('#username').val();
        var password = $('#password').val();
        if(username === "root" && password === "12345"){
            
            window.location.href = "index.html"; // Cambia "main.html" por la URL de la página principal
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
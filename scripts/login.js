$(document).ready(function(){
    $('#loginButton').click(function(){
        var username = $('#username').val();
        var password = $('#password').val();

        if(username === "root" && password === "12345"){
            
            window.location.href = "index.html"; 
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });

    $('#login_landing').click(function(){
        window.location.href = "login.html"; 



    });
   

});
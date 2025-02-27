$(document).ready(function(){
    
    $('#loginButtons').click(function(){
        window.location.href = "login.html"; 
        var username = $('#username').val();
        var password = $('#password').val();
        if(username && password){
            var users = JSON.parse(localStorage.getItem('users')) || [];
            var user = users.find(user => user.username === username && user.password === password);

            if(user){
                localStorage.setItem('loggedInUser', username);
                window.location.href = "index.html"; 
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        } 
    });
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

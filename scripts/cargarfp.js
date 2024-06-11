// Cargar foto de perfil
$(document).ready(function() {
	var loggedInUser = localStorage.getItem('loggedInUser');
	if (loggedInUser) {
		var users = JSON.parse(localStorage.getItem('users')) || [];
		var user = users.find(user => user.username === loggedInUser);

		if (user && user.profileImage) {
			$('#pfp').attr('src', user.profileImage);
			$('#userName').text(user.username);
			$('#userProfile').show();
			$('#loginButtons').hide();
		}
	}
});


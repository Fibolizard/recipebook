/* Profile.js */
$(document).ready(function(){
	// Load user information on page load
	var loggedInUser = localStorage.getItem('loggedInUser');
	if (loggedInUser) {
		var users = JSON.parse(localStorage.getItem('users')) || [];
		var user = users.find(user => user.username === loggedInUser);

		if (user) {
			$('#username').val(user.username);
			$('#email').val(user.email);
			$('#password').val(user.password);
			if (user.profileImage) {
				$('#profileImagePreview').attr('src', user.profileImage);
				$('#pfp').attr('src', user.profileImage); // Update sidebar profile image
			}
		}
	}

	$('#saveProfileButton').click(function(){
		var username = $('#username').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var profileImage = $('#profileImage')[0].files[0];

		var reader = new FileReader();
		reader.onloadend = function() {
			var profileImageData = reader.result;

			var users = JSON.parse(localStorage.getItem('users')) || [];
			var userIndex = users.findIndex(user => user.username === loggedInUser);

			if (userIndex !== -1) {
				users[userIndex].username = username;
				users[userIndex].email = email;
				users[userIndex].password = password;
				users[userIndex].profileImage = profileImageData;

				localStorage.setItem('users', JSON.stringify(users));
				localStorage.setItem('loggedInUser', username);
				alert("Perfil actualizado con éxito");

				// Update sidebar profile image
				$('#pfp').attr('src', profileImageData);

				window.location.href = "index.html";
			}
		};

		if (profileImage) {
			reader.readAsDataURL(profileImage);
		} else {
			reader.onloadend();
		}
	});
});

// Cambiar tema
document.addEventListener('DOMContentLoaded', (event) => {
	// Variables
	const botonCambiarTema = document.getElementById('cambiar-tema');
	const linkTema = document.getElementById('link-tema');

	// Verificar si el usuario tiene preferencia de tema
	// Dark = Oscuro, Light = Claro, Theme = Tema
	const temaActual = localStorage.getItem('theme');
	if (temaActual === 'dark') {
		linkTema.setAttribute('href', 'styles/oscuro.css');
	}

	// Buton para cambiar tema
	botonCambiarTema.addEventListener('click', () => {
		if (linkTema.getAttribute('href') === 'styles/claro.css') {
			// Guardar preferencia de usuario en local storage
			linkTema.setAttribute('href', 'styles/oscuro.css');
			localStorage.setItem('theme', 'dark');
		} else {
			// Guardar preferencia de usuario en local storage
			linkTema.setAttribute('href', 'styles/claro.css');
			localStorage.setItem('theme', 'light');
		}
	});
});

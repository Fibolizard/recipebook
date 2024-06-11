document.addEventListener('DOMContentLoaded', (event) => {
	const themeToggleBtn = document.getElementById('theme-toggle');
	const themeLink = document.getElementById('link-tema');

	themeToggleBtn.addEventListener('click', () => {
		// Check the current stylesheet and switch to the other
		if (themeLink.getAttribute('href') === 'styles/claro.css') {
			themeLink.setAttribute('href', 'styles/oscuro.css');
		} else {
			themeLink.setAttribute('href', 'styles/claro.css');
		}
	});
});

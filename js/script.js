document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const nav = document.getElementById('site-nav');

	menuToggle.addEventListener('click', () => {
			const isVisible = nav.getAttribute('data-visible') === 'true';
			nav.setAttribute('data-visible', !isVisible);
			menuToggle.setAttribute('aria-expanded', !isVisible);
	});

	window.addEventListener('resize', () => {
			if (window.innerWidth >= 768) {
					nav.setAttribute('data-visible', 'true');
			} else {
					nav.setAttribute('data-visible', 'false');
			}
	});
});


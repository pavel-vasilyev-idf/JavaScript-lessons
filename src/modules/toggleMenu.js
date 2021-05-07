const toggleMenu = () => {
	const handlerMenu = (event) => {
		const target = event.target;

		const displayMenu = () => {
			document.querySelector('menu').classList.toggle('active-menu');
		};

		if (target.closest('.menu') ||
			(!target.closest('menu') &&
			document.querySelector('menu').classList.contains('active-menu'))) {
			displayMenu();
		} else if (target.closest('menu') && target.closest('[href^="#"]')) {
			displayMenu();
		}
	};
	document.querySelector('menu').querySelector('a.close-btn').addEventListener('click', (e) => {
			e.preventDefault();
	});

	document.body.addEventListener('click', handlerMenu);
};

export default toggleMenu;
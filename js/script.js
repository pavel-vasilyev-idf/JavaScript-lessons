
window.addEventListener('DOMContentLoaded', () => {


	//timer
	function countTimer(dedline) {
		const timerHours = document.querySelector('#timer-hours');
		const timerMinutes = document.querySelector('#timer-minutes');
		const timerSeconds = document.querySelector('#timer-seconds');
		const timerDays = document.querySelector('#timer-days');
		const spanToDays = document.querySelector('.dott-days');
		let clear = 0;

		function getTimeRemaining() {
			const dateStop = new Date(dedline).getTime();
			const dateNow = new Date().getTime();
			const timeRemaining = (dateStop - dateNow) / 1000;
			const seconds = Math.floor(timeRemaining % 60);
			const minutes = Math.floor((timeRemaining / 60) % 60);
			const hours = Math.floor((timeRemaining / 60 / 60) % 24);
			const days = Math.floor(timeRemaining / 60 / 60 / 24);
			return {
				timeRemaining,
				hours,
				minutes,
				seconds,
				days
			};
		}

		function updateClock() {
			const timer = getTimeRemaining();

			timerDays.textContent = timer.days < 10 ? `0${timer.days}` : timer.days;
			timerHours.textContent = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
			timerMinutes.textContent = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
			timerSeconds.textContent = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;

			if ((timer.hours < 0) || (timer.minutes < 0) || (timer.seconds < 0) || (timer.days < 0)) {
				timerHours.textContent = `00`;
				timerMinutes.textContent = `00`;
				timerSeconds.textContent = `00`;
				timerDays.textContent = `00`;
			}

			if (timer.days === 0) {
				timerDays.style.display = 'none';
				spanToDays.style.display = 'none';
			} else {
				timerDays.style.display = 'inline-block';
				spanToDays.style.display = 'inline-block';
			}
			if (timer.timeRemaining < 0) {
				const endDate = new Date(dedline);
				endDate.setDate(endDate.getDate());
				countTimer(endDate);
				clearInterval(clear);
			}
		}
		clear = setInterval(updateClock, 1000);
		// console.log('clear: ', clear);
	}

	// setInterval(countTimer, 1000, '22 April 2021');
	// countTimer('22 April 2021');
	countTimer('23 April 2021');




	//menu

	const toggleMenu = () => {
		
		const menu = document.querySelector('menu');
		const body = document.querySelector('body');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		}

		body.addEventListener('click', (event) => {
			let target = event.target;
			if (target.closest('.menu')) {
				menu.classList.add('active-menu');
			}
			else if (target.closest('.close-btn') || target.closest('[href^="#"]')) {
				handlerMenu();
			} else {
				target = target.closest('.active-menu');
				if (!target) {
					menu.classList.remove('active-menu');
				}
			}
		});
		
	};

	toggleMenu();



	//popup

	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popupContent = document.querySelector('.popup-content'),
			popupData = {
				count: -445,
				speed: 12,
				startPos: -445,
				endPos: 0
			};

		const showPopup = () => {

			popupData.startPos > popupData.endPos ? popupData.count -= popupData.speed : popupData.count += popupData.speed;
			popupContent.style.transform = `translateY(${popupData.count}px)`;

			if (popupData.startPos > popupData.endPos ? popupData.count > popupData.endPos : popupData.count < popupData.endPos) {
				requestAnimationFrame(showPopup);
			}
		};

		popupBtn.forEach(elem => {
			elem.addEventListener('click', () => {
				popup.style.display = 'block';
				if (screen.width > 768) {
					popupData.count = popupData.startPos;
					requestAnimationFrame(showPopup);
				}
			});
		});


		popup.addEventListener('click', (event) => {
			let target = event.target;

			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';	
				}
			}
		});

	};



	togglePopUp();




	//tabs

	const tabs = () => {
		const tabHeader = document.querySelector('.service-header');
		const tab = tabHeader.querySelectorAll('.service-header-tab');
		const tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = (index) => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');

				}
				
			}
		};

		tabHeader.addEventListener('click', (event) => {
			let target = event.target;
				target = target.closest('.service-header-tab');

			if (target) {
				tab.forEach( (item, index) => {
					if (item === target) {
						toggleTabContent(index)
					}
				});
			}
		})
	};
	tabs();
});
 
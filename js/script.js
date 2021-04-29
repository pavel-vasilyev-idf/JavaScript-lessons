
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
	countTimer('31 May 2021');




	//menu

	const toggleMenu = () => {
		
		const menu = document.querySelector('menu');
		const body = document.querySelector('body');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		}

		body.addEventListener('click', (event) => {
			let target = event.target;
			if (target.closest('.menu') || (!target.closest('menu') &&
            menu.classList.contains('active-menu'))) {
				handlerMenu();
			}
			else if (target.closest('.close-btn') || target.closest('[href^="#"]')) {
				handlerMenu();
			} else {
				target = target.closest('.active-menu');
				if (!target) {
					handlerMenu();
				}
			}
		});
		
	};

	// toggleMenu();

	


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



	//slider

	const slider = () => {
		const slider = document.querySelector('.portfolio-content');
		const slide = document.querySelectorAll('.portfolio-item');
		const btn = document.querySelectorAll('.portfolio-btn');
		const portfolioDots = document.querySelector('.portfolio-dots');

		const addDots = () => {
			
			slide.forEach(() => {
				const newDot = document.createElement('li');
				newDot.classList.add('dot');
				portfolioDots.appendChild(newDot);
			})
			portfolioDots.children[0].classList.add('dot-active');
			
		};

		addDots();

		
		const dot = document.querySelectorAll('.dot');

		let currentSlide = 0; //Номер слайда, начинаем с нуля. Значение будет меняться
		let interval = 0;
		
		const prevSlide = (elem, index,strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index,strClass) => {
			elem[index].classList.add(strClass);
		};

		//автозапуск слайдов
		const autoPlaySlide = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
			

		};

		//старт слайдера
		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		//стоп слайдера
		const stopSlide = () => {
			clearInterval(interval);
		};

		//клик по кнопкам-стрелочкам
		slider.addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;


			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			};


			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((item, index) => {
					if (item === target) {
						currentSlide = index;
					}
				})
			};

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		});

		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlide();
			}
		});
		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide();
			}
		});

		startSlide(5000);
		

	}

	slider();


	//img
	const setCommandImg = () => {
		const command = document.querySelector('#command .row');

		const changingPhotos = () => {
			const target = event.target;

			if (target.classList.contains('command__photo')) {
				const lastSrc = target.src;

				target.src = target.dataset.img;
				target.dataset.img = lastSrc;
			}
		};

		command.addEventListener('mouseover', changingPhotos);
		command.addEventListener('mouseout', changingPhotos);
	};

	setCommandImg();

	//calc
	const checkCalcBlock = () => {
		const calcBlock = document.querySelector('.calc-block');

		calcBlock.addEventListener('input', (event) => {
			let target = event.target;
			if (target.type === 'text') {
				target.value = target.value.replace(/[^\d]/g, '');
			}
		});
	};

	checkCalcBlock();

	const checkFooterForm = () => {
		const footerForm = document.querySelector('.footer-form-input');

		footerForm.addEventListener('input', (event) => {
			let target = event.target;
			if (target.type === 'text') {
				target.value = target.value.replace(/[^а-яА-ЯЁё\-\ ]/, '');
			} else if (target.type === 'email') {
				target.value = target.value.replace(/[^a-zA-Z\@\_\-\.\!\~\*\']/, '');
			} else if (target.type === 'tel') {
				target.value = target.value.replace(/[^\d\(\)\-]/g, '');
			}
		});
	};

	checkFooterForm();


	// 6 point task 23

	const	userName = document.querySelectorAll('[name=user_name]');
	const	userMessage = document.querySelectorAll('[name=user_message]');
	const	userEmail = document.querySelectorAll('[name=user_email]');

	//check inputs on ''
	const checkInputs = (input, exp) => {
		if (!!input.value.match(exp)) {
						input.value = input.value.replace(exp, '');
		} else {
			return;
		}
	}

	const clearInput = (item) => {
		item.value = item.value.replace(/\s+/g, ' ');
		item.value = item.value.replace(/\-+/g, '-');

			let regExpElem = new RegExp("ReGeX" + item.value + "ReGeX");
			if (/^[/ /-]/.test(regExpElem)) {
				item.value = item.value.replace(/^[/ /-]/, '')
			}
			if(/[/ /-]$/.test(regExpElem)) {
				item.value = item.value.replace(/[/ /-]$/, '')
			}
	}

	function capitalize(elem) {
			let inputValue = elem.value
			return inputValue.split(' ').map(item => 
					item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
	}

	userName.forEach(el => {
			el.addEventListener('blur', () => {
					checkInputs(el, /[^а-яА-ЯЁё\-\ ]/);
					clearInput(el);
					el.value = capitalize(el)
			})
	})

	userMessage.forEach(el => {
			el.addEventListener('blur', () => {
					checkInputs(el, /[^а-яА-ЯЁё\-\ ]/);
					clearInput(el);
			})
	})

	userEmail.forEach(el => {
			el.addEventListener('blur', () => {
					checkInputs(el, /[^a-zA-Z\@\_\-\.\!\~\*\']/);
					clearInput(el);
			})
	})


	//calculator
	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block');
		const calcType = document.querySelector('.calc-type');
		const calcDay = document.querySelector('.calc-day');
		const calcSquare = document.querySelector('.calc-square');
		const calcCount = document.querySelector('.calc-count');
		const totalValue = document.getElementById('total');

		const countSum = () => {
			let total = 0;
			let countValue = 1;
			let dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value;
			const squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			};

			if (calcDay.value && calcDay.value < 5) {
				dayValue *=  2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *=  1.5;
			};

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			};

			totalValue.textContent = total;
			animateValue(totalValue, 0, totalValue.textContent, 800);

		};

		calcBlock.addEventListener('change', (event) => {
			const target = event.target;

			if (target.matches('select') || target.matches('input')) {
				countSum();
			};
		}); 

		function animateValue(obj, start, end, duration) {
			let startTimestamp = null;
			const step = (timestamp) => {
			  if (!startTimestamp) startTimestamp = timestamp;
			  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			  obj.innerHTML = Math.floor(progress * (end - start) + start);
			  if (progress < 1) {
				window.requestAnimationFrame(step);
			  }
			};
			window.requestAnimationFrame(step);
		  }
		
		  

	}

	calc(100);

});
 
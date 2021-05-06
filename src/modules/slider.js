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

export default slider;
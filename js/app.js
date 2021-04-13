'use strict'

const books = document.querySelectorAll('.book');

//- Восстановить порядок книг.
books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);

//- Заменить картинку заднего фона на другую из папки image

const body = document.querySelector('body');
body.style.background = `url('./image/you-dont-know-js.jpg')`;
body.style.backgroundSize = 100 + `%`;


//- Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
const changeTitleBook = books[4];
changeTitleBook.children[0].children[0].innerText = 'Книга 3. this и Прототипы Объектов';

//- Удалить рекламу со страницы
const adv = document.querySelector('.adv');
adv.remove();



//- Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
//- book-2
const elementBookTwo = books[0].querySelectorAll('li');
elementBookTwo[3].append(elementBookTwo[6]);
elementBookTwo[3].append(elementBookTwo[8]);
elementBookTwo[9].append(elementBookTwo[2]);

//- book-5
const elementBookFive = books[5].querySelectorAll('li');
elementBookFive[1].append(elementBookFive[9]);
elementBookFive[9].append(elementBookFive[3]);
elementBookFive[9].append(elementBookFive[4]);
elementBookFive[8].append(elementBookFive[5]);
elementBookFive[7].append(elementBookFive[5]);


//- в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const elementBookSix = books[2].querySelectorAll('li');
elementBookSix[9].insertAdjacentHTML('afterbegin', '<li>Глава 8: За пределами ES6</li>');






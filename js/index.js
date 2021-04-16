'use strict'

document.addEventListener('DOMContentLoaded', function () {
    function DomElement( selector, height, width, bg, fontSize, position, text ) {
        this.selector = selector,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize,
        this.position = position,
        this.text = text,
        this.top = 0,
        this.left = 0

    }

    let body = document.querySelector('body')


    DomElement.prototype.createNewEl = function () {
        let newElem;
        if (this.selector.startsWith('.')) {
        newElem = document.createElement('div');
        newElem.classList = this.selector.slice(1);
        body.appendChild(newElem);
        } else if (this.selector.startsWith('#')) {
            newElem = document.createElement('p');
            newElem.id = this.selector.slice(1);
            body.appendChild(newElem);
        }

        newElem.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;
            position: ${this.position};
            top: ${this.top}px;
            left: ${this.left}px;
        `
        newElem.innerText = `${this.text}`
    }

    let newElDiv = new DomElement('.block', 100, 100, 'red', 20, 'static', prompt('Введите текст для первого блока', '1'));
    let newElParagraph = new DomElement('#best', 100, 300, 'yellow', 40, 'static', prompt('Введите для второго блока', '2'));
    console.log('newElDiv: ', newElDiv);
    console.log('newElParagraph: ', newElParagraph);

    newElDiv.createNewEl();
    newElParagraph.createNewEl();

    //- доп задание
    let threeElement = new DomElement('.new-block', 100, 100, 'blue', 20, 'absolute', prompt('Введите для третьего блока', '3'));
    console.log('threeElement: ', threeElement);

    threeElement.createNewEl();

    DomElement.prototype.game = function () {
        let travel = 10;
        let el = document.querySelector('.new-block');
        document.addEventListener('keyup', function (e) {
            if (e.key === 'ArrowUp') {
                el.style.top = parseInt(el.style.top) - travel + 'px';
            } else if (e.key === 'ArrowDown') {
                el.style.top = parseInt(el.style.top) + travel + 'px';
            } else if (e.key === 'ArrowRight') {
                el.style.left = parseInt(el.style.left) + travel + 'px';
            } else if (e.key === 'ArrowLeft') {
                el.style.left = parseInt(el.style.left) - travel + 'px';
            }
        })
        
    }


    threeElement.game();


})


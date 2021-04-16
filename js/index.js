'use strict'

document.addEventListener('DOMContentLoaded', function () {
    function DomElement( selector, height, width, bg, fontSize, position, text ) {
        this.selector = selector,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize,
        this.position = position,
        this.text = text

    }

    let body = document.querySelector('body')


    DomElement.prototype.createNewEl = function () {
        let newElem;

        if (this.selector.startsWith('.')) {
        newElem = document.createElement('div');
        newElem.classList = this.selector;
        body.appendChild(newElem);
        } else if (this.selector.startsWith('#')) {
            newElem = document.createElement('p');
            newElem.id = this.selector;
            body.appendChild(newElem);
        }

        newElem.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;
            position: ${this.position};
        `

        newElem.innerText = `${this.text}`
    }

    let newElDiv = new DomElement('.block', 100, 100, 'red', 20, 'static', prompt('Введите любой текст', ''));
    let newElParagraph = new DomElement('#best', 100, 300, 'yellow', 40, 'static', prompt('Введите любой текст', ''));
    console.log('newElDiv: ', newElDiv);
    console.log('newElParagraph: ', newElParagraph);

    newElDiv.createNewEl();
    newElParagraph.createNewEl();

    //- доп задание
    let threeElement = new DomElement('.new-block', 100, 100, 'blue', 20, 'absolute', prompt('Введите любой текст', ''));
    threeElement.createNewEl();


    console.log(threeElement);


    DomElement.prototype.game = function () {
        let travel = 10;
        document.addEventListener('keyup', function (e) {
            if (e.key === 'ArrowUp') {

                console.log();
            }
        })
    }


    threeElement.game();


})


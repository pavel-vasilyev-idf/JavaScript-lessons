'use strict'

function DomElement( selector, height, width, bg, fontSize, text ) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize,
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
    `

    newElem.innerText = `${this.text}`
}

function answer() {
    prompt('Введите текст', 'Здрасьте!')
}

let newElDiv = new DomElement('.block', 100, 100, 'red', 20, prompt('Введите любой текст', ''));
let newElParagraph = new DomElement('#best', 100, 300, 'yellow', 40, prompt('Введите любой текст', ''));
console.log('newElDiv: ', newElDiv);
console.log('newElParagraph: ', newElParagraph);

newElDiv.createNewEl();
newElParagraph.createNewEl();

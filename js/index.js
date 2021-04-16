function DomElement( selector, height, width, bg, fontSize ) {
    this.selector = selector;

    if (selector) {
        console.log('Yess');
    } else {
        console.log('No');
    }
}

let domEl = new DomElement('.block')
console.log(DomElement);
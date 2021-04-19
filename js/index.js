class First {
    constructor() {

    }

    hello() {
        console.log("Привет я метод родителя!");
    }
};


let first = new First();
first.hello()

class Second extends First {
    constructor() {
        super(First)
    }

    hello() {
        super.hello();
        console.log("А я наследуемый метод!");
    }
};

let second = new Second();
second.hello();
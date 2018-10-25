//Define a class.
class Person {
    constructor(...args) {
        this.props = [];
        for (let prop of args) {
            this.props.push(prop);
        }
    }

    whoIam() {
        return this.props.join(', ');
    }
}

let piri = new Person('Kiss Piroska', 32, 'Batonyterenye');
console.log(piri.whoIam());

class Worker extends Person {
    constructor(...args) {
        super(...args);
        this.options = {};
        this.options.power = 10;
    }

    get power() {
        return `My power is: ${this.options.power}`;
    }

    set power(strength) {
        this.options.power = strength;
    }
}

let sanyi = new Worker('Nagy Sandor');
sanyi.power = 20;
console.log(sanyi.power);
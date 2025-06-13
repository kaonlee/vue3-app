export class Counter {
    constructor() {
        this.value = 0;
        this.isActive = false;

        this.test = this.test.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.value += 1;
    }

    decrement() {
        this.value -= 1;
    }

    reset() {
        this.value = 0;
    }

    setActive() {
        this.isActive = !this.isActive;
    }

    test() {
        this.setActive();
    }
    
}
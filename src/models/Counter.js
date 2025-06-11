export class Counter {
    constructor(initialValue = 0) {
        this.value = initialValue;
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

}
export class Counter {
    constructor() {
        this.value = 0;
        this.isActive = false;
    }

    increment() {
        this.value += 1;
        this.isActive = true
    }

    decrement() {
        this.value -= 1;
        this.isActive = this.value > 0;
    }

    reset() {
        this.value = 0;
    }

}
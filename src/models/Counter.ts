export interface ICounter {
  value: number
  isActive: boolean
  increment(): void
  decrement(): void
  reset(): void
  setActive(): void
  test(): void
}

export class Counter implements ICounter {
  value: number
  isActive: boolean

  constructor() {
    this.value = 0
    this.isActive = false

    this.test = this.test.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.value += 1
  }

  decrement() {
    this.value -= 1
  }

  reset() {
    this.value = 0
  }

  setActive() {
    this.isActive = !this.isActive
  }

  test() {
    this.setActive()
  }
}

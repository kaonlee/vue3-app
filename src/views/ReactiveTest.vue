<script setup lang="ts">
import { Counter } from '@/models/Counter'
import { reactive } from 'vue'

const counter = reactive(new Counter())
function counterIncrement() {
  counter.increment()
}
function counterDecrement() {
  counter.decrement()
}
</script>

<template>
  <main>
    <header>
      <h2>Reactive Test</h2>
    </header>
    <div class="wrapper">
      <h2>Counter: {{ counter.value }}</h2>
      <button @click="counter.increment()">Increment</button>
      <span>點擊之後，會發現下面的 decrement 有影響到元件內部，只是沒有辦法被觀察到</span>
      <button @click="counter.decrement()">Decrement</button>
      <span
        >這顆 decrement 無法影響，因為 decrement.bind(this) 綁定後斷開連結，觸發不是從 vue
        發出</span
      >

      <br/>

      <h2>Active: {{ counter.isActive }}</h2>
      <button @click="counter.setActive()">setActive</button>
      <span>這顆 test 無法影響，因為 test.bind(this) 綁定後斷開連結，觸發不是從 vue 發出</span>
      <button @click="counter.test()">setActive but bind this</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import {Counter} from '@/models/Counter'
import { reactive, ref, computed } from 'vue'

const counter = reactive(new Counter())
function counterIncrement() {
  counter.increment()
}
function counterDecrement() {
  counter.decrement()
}


const counter2 = ref(null)

function createCounter() {
  counter2.value = new Counter()
}
const counter2ValueComputed = computed(() => counter2.value? counter2.value.value : 0)
function counterIncrement2() {
  counter2.value?.increment()
}
function counterDecrement2() {
  counter2.value?.decrement()
}

</script>

<template>
  <main>
    <header>
    <h2>Reactive Test</h2>
  </header>
    <div class="wrapper">
      <p>Counter: {{ counter.value }}</p>
      <button @click="counter.increment()">Increment</button>
      <button @click="counter.decrement()">Decrement</button>
      <button @click="counterIncrement">Increment2</button>
      <button @click="counterDecrement">Decrement2</button>
    </div>
    <div class="wrapper">
      <p>Counter: {{ counter2?.value }}</p>
      <p>Counter Computed: {{ counter2ValueComputed }}</p>
      <button @click="createCounter">Create Counter</button>
      <button @click="counter2?.increment()">Increment</button>
      <button @click="counter2?.decrement()">Decrement</button>
      <button @click="counterIncrement2">Increment</button>
      <button @click="counterDecrement2">Decrement</button>
    </div>
  </main>
</template>


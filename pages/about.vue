<template>
  <div>
    <h1 @click="increment">About page</h1>
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
const counterStore = useCounterStore()

const count = computed(() => counterStore.getCount)

const increment = () => counterStore.increment()
</script>

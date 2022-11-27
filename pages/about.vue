<template>
  <div class="container mx-auto text-center">
    <h1 class="mb-4">
      Count: <span class="font-bold">{{ count }}</span>
    </h1>
    <button @click="increment" class="rounded bg-green-300 text-white px-5 py-2">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#head'

const counterStore = useCounterStore()

const count = computed(() => counterStore.getCount)

const increment = () => counterStore.increment()

useHead({
  title: 'About page',
})
</script>

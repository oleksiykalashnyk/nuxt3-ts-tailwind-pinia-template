<template>
  <div class="container mx-auto text-center">
    <h1 class="mb-4">
      Count: <span class="font-bold">{{ count }}</span>
    </h1>
    <h1>Try increasing the number <span class="font-bold text-red-600">to 11</span></h1>
    <p class="italic text-[12px]">increment button in About page</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '#imports'
import { useHead } from '#head'

const counterStore = useCounterStore()
const count = computed(() => counterStore.getCount)

onMounted(() => {
  if (Number(count.value) > 10) {
    alert('Ok')
    counterStore.setCount(5)
  }
})

useHead({
  title: 'Main page',
})
</script>

<template>
  <div>
    <h1>{{ count }}</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '#imports'
const counterStore = useCounterStore()

const count = computed(() => counterStore.getCount)

onMounted(() => {
  if (Number(count.value) > 10) {
    alert('Ok')
    counterStore.setCount(5)
  }
})
</script>

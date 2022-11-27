<template>
  <button @click="router.back()">Back</button>
  <h2>{{ x }}</h2>
</template>

<script setup lang="ts">
import { useRouter } from '#app'
import { onMounted } from '#imports'

const router = useRouter()
let x
console.log(x)
onMounted(() => {
  x = window.history.length
  console.log(window.history.length)
  console.log(x)
})
</script>

<style scoped></style>

<template>
  <button @click="router.back()">Back</button>
</template>

<script setup lang="ts">
import { useRouter } from '#app'
const router = useRouter()
</script>

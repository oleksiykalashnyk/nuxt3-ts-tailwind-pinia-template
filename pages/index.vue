<template>
  <div>
    <h1>Index page</h1>
    <h2>{{ x }}</h2>
    <NuxtLink to="/about">about</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const x: string = 'x'

definePageMeta({
  layout: 'custom',
})
</script>

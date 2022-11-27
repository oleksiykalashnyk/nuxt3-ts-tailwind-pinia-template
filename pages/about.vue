<template>
  <div>
    <h1>About page</h1>
    <h2>{{ x }}</h2>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

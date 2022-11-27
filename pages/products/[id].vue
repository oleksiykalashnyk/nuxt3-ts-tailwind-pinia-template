<template>
  <div>
    <h1>Products page {{ id }}</h1>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
</script>

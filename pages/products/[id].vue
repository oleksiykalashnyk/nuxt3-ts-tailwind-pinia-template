<template>
  <div>
    <h1>Products page {{ route.params.id }}</h1>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

const route = useRoute()

definePageMeta({
  validate: async (route) => {
    const nuxtApp = useNuxtApp()
    // Check if the id is made up of digits
    return /^\d+$/.test(<string>route.params.id)
  },
})
</script>

<template>
  <div>
    <molecule-navbar class="mb-6" />
    <slot />
    <div class="pt-[1200px]" />
  </div>
</template>

<script setup lang="ts">
import MoleculeNavbar from '~/components/molecules/MoleculeNavbar'
</script>

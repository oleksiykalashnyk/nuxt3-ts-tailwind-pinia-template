<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <p>{{ error.statusMessage }}</p>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
import { clearError } from 'nuxt/app'
import { PropType } from '@vue/runtime-core'

interface ITest {
  statusCode: string
  statusMessage: string
}
const props = defineProps({
  error: {
    type: Object as PropType<ITest>,
  },
})

console.log(props.error)
const handleError = () => clearError({ redirect: '/' })
</script>

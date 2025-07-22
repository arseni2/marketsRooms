<script setup lang="ts">
import type { PropsButtonType } from '@/shared/Button/types/types.ts'

const {variant} = defineProps<PropsButtonType>()

const variantClasses = {
  primary: 'text-white bg-primary rounded-lg text-center px-3.5 h-8.5 text-sm',
  secondary: 'outline-gray-200 rounded-lg text-center px-3.5 h-8.5 text-sm'
}

const defaultClass = `font-bold ${variantClasses[variant] || ''}`
</script>

<template>
<button :class="defaultClass">
  <slot />
</button>
</template>

<style scoped>

</style>

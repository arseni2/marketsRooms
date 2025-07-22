<script setup lang="ts">
import { useAttrs } from 'vue'
import type { PropsInputType } from '@/shared/Input/types/types.ts'

const props = defineProps<PropsInputType>()
const attrs = useAttrs()
</script>

<template>
  <label v-if="props.label" :class="`flex flex-col gap-1 text-sm ${props.labelClass}`">
    {{ props.label }}
    <input
      v-bind="props"
      :class="`border-1 border-gray-300 p-2 rounded-lg text-sm font-medium text-gray-900 outline-none focus:border-primary transition-all ${attrs.class || ''}`"
    />
  </label>
  <input
    v-else
    v-bind="props"
    :class="`border-1 border-gray-300 p-2 rounded-lg text-sm font-medium text-gray-900 outline-none focus:border-primary transition-all ${attrs.class || ''}`"
  />
</template>

<style scoped></style>

<script setup lang="ts">
import type { PropsInputType } from '@/shared/Input/types/types.ts'

const {label, ...otherProps} = defineProps<PropsInputType>()
</script>

<template>
  <label v-if="label" for="" class="flex flex-col gap-1 text-sm">
    {{ label }}
    <textarea v-bind="otherProps" class="border-1 border-gray-300 p-2 rounded-lg text-sm font-bold text-gray-900 outline-none focus:border-primary transition-all"></textarea>
  </label>
  <textarea v-bind="otherProps" v-else class="border-1 border-gray-300 p-2 rounded-lg text-sm font-bold text-gray-900 outline-none focus:border-primary transition-all"></textarea>
</template>

<style scoped>

</style>

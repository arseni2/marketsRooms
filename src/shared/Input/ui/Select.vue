<script setup lang="ts">
import type { PropsSelectType } from '@/shared/Input/types/types.ts'

const { options, label } = defineProps<PropsSelectType>()
</script>

<template>
  <label v-if="label" for="" class="flex flex-col gap-1 text-sm">
    {{ label }}
    <select
      class="border-1 border-gray-300 p-2 rounded-lg text-sm  text-gray-900 outline-none focus:border-primary transition-all"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.value }}
      </option>
    </select>
  </label>

  <select
    v-else
    class="border-1 border-gray-300 p-2 rounded-lg text-sm  text-gray-900 outline-none focus:border-primary transition-all"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.value }}
    </option>
  </select>
</template>

<style scoped></style>

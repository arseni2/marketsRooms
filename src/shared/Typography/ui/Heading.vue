<script setup lang="ts">
import type { PropsHeadingType } from '@/shared/Typography/types/types.ts'

const {tag} = defineProps<PropsHeadingType>()

const classMap: Record<PropsHeadingType['tag'], string> = {
  h1: "text-center text-3xl",
  h2: "text-center text-3xl",
  h3: "text-center text-3xl",
  h4: "text-center text-2xl",
  h5: "font-semibold text-xl",
  h6: "font-semibold text-base",
}
</script>

<template>
  <component :is="tag" :class="classMap[tag]">
    <slot />
  </component>
</template>

<style scoped>

</style>

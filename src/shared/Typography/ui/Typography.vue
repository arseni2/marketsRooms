<script lang="ts" setup>
import { defineProps } from 'vue'
import { type PropsTypographyType, VariantEnum } from '@/shared/Typography/types/types.ts'

const props = defineProps<PropsTypographyType>()
</script>

<template>
  <p
    :style="{ fontSize: props.size ? `${props.size}px` : undefined }"
    :class="[
      {
        'text-primary': props.variant === VariantEnum.primary,
        'text-secondary': props.variant === VariantEnum.secondary,
      },
    ]"
  >
    {{ props.text }}
    <slot />
  </p>
</template>

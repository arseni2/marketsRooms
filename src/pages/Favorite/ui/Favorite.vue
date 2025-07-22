<script setup lang="ts">

import Heading from '@/shared/Typography/ui/Heading.vue'
import FlatCard from '@/widgets/FlatCard/ui/FlatCard.vue'
</script>

<template>
<div class="m-section">
  <Heading tag="h1">Избранное</Heading>
  <div class="mt-4 grid gap-4.5 grid-cols-4">
    <FlatCard is-show-button />
    <FlatCard is-show-button />
    <FlatCard is-show-button />
    <FlatCard is-show-button />
    <FlatCard is-show-button />
    <FlatCard is-show-button />
    <FlatCard is-show-button />
    <FlatCard is-show-button />
  </div>
</div>
</template>

<style scoped>

</style>

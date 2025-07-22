<script setup lang="ts">

import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
</script>

<template>
  <div class="border-1 border-gray-200 flex gap-4 p-4 rounded-xl w-fit">
    <img class="w-20 h-20 rounded-lg" src="@/assets/userProfile.png" alt="logo" />
    <div class="flex flex-col gap-2">
      <Heading tag="h6">Иванов Иван Иванович</Heading>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <li class="pi pi-user text-primary text-xs"></li>
          <Typography size="12">Тестовая информация о себе</Typography>
        </div>
        <div class="flex gap-2 items-center">
          <li class="pi pi-map-marker text-primary text-xs"></li>
          <Typography size="12">Москва</Typography>
        </div>
        <div class="flex gap-2 items-center">
          <li class="pi pi-lightbulb text-xs text-primary"></li>
          <div>
            <div class="px-1.5 py-1 border-1 border-gray-200 rounded-md text-xs">аренда</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

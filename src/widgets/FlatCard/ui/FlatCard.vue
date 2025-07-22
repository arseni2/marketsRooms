<script setup lang="ts">
import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import { VariantEnum } from '@/shared/Typography/types/types.ts'
import type { FlatCardPropsType } from '@/widgets/FlatCard/types/types.ts'
import Button from '@/shared/Button/ui/Button.vue'

const {isShowButton} = defineProps<FlatCardPropsType>()
</script>

<template>
  <div class="border-[1px] border-gray-200 rounded-lg w-fit">
    <div class="min-w-[260px] p-4 flex flex-col gap-4">
      <div class="flex gap-4 justify-between items-center">
        <Typography
          size="12"
          :variant="VariantEnum.secondary"
          text="Новое Видное корп. 18.1, секц. 2"
        />
        <li class="pi pi-ellipsis-h"></li>
        <li class="pi pi-heart"></li>
      </div>
      <img
        class="w-full"
        src="https://media.samolet.ru/flat/plan/8981a019-04a4-ee11-b829-005056b81dee.svg"
        alt="img"
      />
      <div class="flex gap-2 justify-center px-1">
        <div class="w-full h-[2px] rounded-full bg-primary"></div>
        <div class="w-full h-[2px] rounded-full bg-gray-200"></div>
      </div>
      <Heading tag="h5"> 3 539 793 ₽ </Heading>
      <div class="flex gap-2 ">
        <div class="bg-gray-150 px-2 py-1 rounded-lg w-fit">
          <Typography text="Студия" :variant="VariantEnum.normal" size="12" class="font-medium" />
        </div>

        <div class="bg-gray-150 px-2 py-1 rounded-lg w-fit">
          <Typography text="22,81 м²" :variant="VariantEnum.normal" size="12" class="font-medium" />
        </div>

        <div class="bg-gray-150 px-2 py-1 rounded-lg w-fit">
          <Typography text="9 этаж из 13" :variant="VariantEnum.normal" size="12" class="font-medium" />
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <Typography size="12" text="В ипотеку —" :variant="VariantEnum.secondary" />
        <Typography size="12" text=" от 11 111 ₽/мес. " :variant="VariantEnum.primary" />
      </div>

      <div v-if="isShowButton">
        <Button class="w-full font-medium tracking-wide" variant="primary">Забронировать</Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

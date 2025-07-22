<script setup lang="ts">
import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'

const url =
  'https://img.m2.ru/i/s560x420/m2-pht/cf8c42e/5b26a071/61af4a94-1adf-4084-a82e-83e9e9c3ba60/origin'
</script>

<template>
  <article class="max-w-[550px]">
    <div>
      <img :src="url" alt="image" class="rounded-lg" />
      <div class="flex gap-4 justify-center -mt-4.5 px-4.5">
        <div class="w-full h-[2.5px] rounded-full bg-white"></div>
        <div class="w-full h-[2.5px] rounded-full bg-gray-300"></div>
        <div class="w-full h-[2.5px] rounded-full bg-gray-300"></div>
      </div>
    </div>

    <div class="flex flex-col mt-[24px]">
      <div class="flex justify-between items-center">
        <Heading tag="h5">Горки Парк</Heading>
        <Heading tag="h6"> от 2,9 млн ₽</Heading>
      </div>

      <div class="border-t border-[#ecf0f8] mt-[16px]">
        <div class="bg-gray-150 rounded-lg px-3 py-4 flex flex-col mt-[16px]">
          <div class="grid grid-cols-3 pb-3">
            <Typography size="14" text="Студии" class="text-gray-700" />
            <Typography size="14" text="от 32,32 м²" class="text-gray-700" />
            <Typography size="14" text="от 2,9 млн ₽" class="font-medium text-right" />
          </div>

          <div class="grid grid-cols-3 border-t border-gray-200 pt-2 pb-3">
            <Typography size="14" text="1-комнатные" class="text-gray-700" />
            <Typography size="14" text="от 40,32 м²" class="text-gray-700" />
            <Typography size="14" text="от 2,9 млн ₽" class="font-medium text-right" />
          </div>

          <div class="grid grid-cols-3 border-t border-gray-200 pt-2 pb-3">
            <Typography size="14" text="2-комнатные" class="text-gray-700" />
            <Typography size="14" text="от 50,32 м²" class="text-gray-700" />
            <Typography size="14" text="от 2,9 млн ₽" class="font-medium text-right" />
          </div>

          <div class="grid grid-cols-3 border-t border-gray-200 pt-2 pb-3">
            <Typography size="14" text="3-комнатные" class="text-gray-700" />
            <Typography size="14" text="от 60,32 м²" class="text-gray-700" />
            <Typography size="14" text="от 2,9 млн ₽" class="font-medium text-right" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>

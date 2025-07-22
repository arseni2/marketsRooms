<script setup lang="ts">
import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import ContactForm from '@/widgets/ContactForm/ui/ContactForm.vue'
</script>

<template>
  <div class="m-section">
    <Heading tag="h1">Наши контакты</Heading>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div class="flex flex-col gap-4">

        <div class="border-1 border-gray-200 rounded-lg p-4 flex flex-col gap-4">
          <div class="flex gap-4 items-center">
            <li class="bg-gray-150 p-2.5 rounded-md text-gray-900 pi pi-phone"></li>
            <Heading tag="h6">Контакты</Heading>
          </div>
          <div class="flex items-center justify-between">
            <Typography>Телефон</Typography>
            <Typography>+7 (999) 999-99-99</Typography>
          </div>
          <div class="flex items-center justify-between">
            <Typography>E-mail</Typography>
            <Typography>example@mail.ru</Typography>
          </div>
        </div>

        <div class="border-1 border-gray-200 rounded-lg p-4 flex flex-col gap-4">
          <div class="flex gap-4 items-center">
            <li class="bg-gray-150 p-2.5 rounded-md text-gray-900 pi pi-building-columns"></li>
            <Heading tag="h6">Реквизиты</Heading>
          </div>
          <div class="flex items-center justify-between">
            <Typography>Компания</Typography>
            <Typography>ООО "Пример"</Typography>
          </div>
          <div class="flex items-center justify-between">
            <Typography>ИНН</Typography>
            <Typography>9999999999</Typography>
          </div>
          <div class="flex items-center justify-between">
            <Typography>КПП</Typography>
            <Typography>9999999999</Typography>
          </div>
          <div class="flex items-center justify-between">
            <Typography>ОГРН</Typography>
            <Typography>9999999999</Typography>
          </div>
          <div class="flex items-center justify-between">
            <Typography>Адрес</Typography>
            <Typography>Пример, 2-я Садовая улица, 99</Typography>
          </div>
        </div>
      </div>

      <div class="border-1 border-gray-200 rounded-lg p-4 flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <li class="bg-gray-150 p-2.5 rounded-md text-gray-900 pi pi-envelope"></li>
          <Heading tag="h6">Свяжитесь с нами</Heading>
        </div>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

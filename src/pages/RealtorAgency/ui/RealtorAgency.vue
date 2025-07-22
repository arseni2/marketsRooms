<script setup lang="ts">
import Contact from '@/pages/Contact/ui/Contact.vue'
import Heading from '@/shared/Typography/ui/Heading.vue'
import Typography from '@/shared/Typography/ui/Typography.vue'
import { VariantEnum } from '@/shared/Typography/types/types.ts'
import Button from '@/shared/Button/ui/Button.vue'
import Input from '@/shared/Input/ui/Input.vue'
</script>

<template>
  <div class="m-section">
    <Heading tag="h1">Все сервисы в <span class="text-primary">одном месте</span></Heading>
    <div class="grid grid-cols-3 gap-6 mt-4">
      <div class="w-fit shadow-lg shadow-gray-100 rounded-lg p-4">
        <div class="flex gap-4 items-center mb-3">
          <li class="text-primary bg-gray-100 p-2.5 rounded-md  pi pi-percentage"></li>
          <Heading tag="h5">Заявка на ипотеку</Heading>
        </div>

        <Typography>
          Отправим одну анкету в несколько банков и поможем получить одобрение от 5 минут
        </Typography>
      </div>
      <div class="w-fit shadow-lg shadow-gray-100 rounded-lg p-4">
        <div class="flex gap-4 items-center mb-3">
          <li class="text-primary bg-gray-100 p-2.5 rounded-md  pi pi-calculator"></li>
          <Heading tag="h5">Регистрация и расчёты </Heading>
        </div>

        <Typography>
          Зарегистрируем сделку с любым типом недвижимости и проведём безопасные расчёты
        </Typography>
      </div>
      <div class="w-fit shadow-lg shadow-gray-100 rounded-lg p-4">
        <div class="flex gap-4 items-center mb-3">
          <li class="text-primary bg-gray-100 p-2.5 rounded-md  pi pi-shield"></li>
          <Heading tag="h5">Проверка и защита</Heading>
        </div>

        <Typography>
          Выявим скрытые риски и расскажем, как обезопасить клиента при покупке вторички
        </Typography>
      </div>
      <div class="w-fit shadow-lg shadow-gray-100 rounded-lg p-4">
        <div class="flex gap-4 items-center mb-3">
          <li class="text-primary bg-gray-100 p-2.5 rounded-md  pi pi-home"></li>
          <Heading tag="h5">Новостройки и Свой дом </Heading>
        </div>

        <Typography>
          Получайте комиссию до 5% за продажу квартир в новостройках и проектов домов
        </Typography>
      </div>
      <div class="w-fit shadow-lg shadow-gray-100 rounded-lg p-4">
        <div class="flex gap-4 items-center mb-3">
          <li class="text-primary bg-gray-100 p-2.5 rounded-md  pi pi-user"></li>
          <Heading tag="h5">Помощь специалистов </Heading>
        </div>

        <Typography>
          Задавайте любые вопросы про работу сервисов и получайте бесплатные консультации
        </Typography>
      </div>
      <div class="w-fit shadow-lg shadow-gray-100 rounded-lg p-4">
        <div class="flex gap-4 items-center mb-3">
          <li class="text-primary bg-gray-100 p-2.5 rounded-md  pi pi-mobile"></li>
          <Heading tag="h5">Удобное приложение</Heading>
        </div>

        <Typography>
          Получайте уведомления об этапах сделки прямо
          на телефон
        </Typography>
      </div>
    </div>
  </div>

  <div class="m-section">
    <Heading tag="h1"><span class="text-primary">Присоединяйтесь</span> к крупному сообществу риелторов</Heading>
    <div class="mt-4">
      <form class="border-1 border-gray-200 rounded-lg p-4 space-y-4 md:space-y-6" action="#">
        <div>
          <Input placeholder="Почта" label="Почта" class="!font-normal" />
        </div>
        <div>
          <Input placeholder="Пароль" label="Пароль" class="!font-normal" />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center">
              <Input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 bg-gray-50"
              />
            </div>
            <div class="ml-3 text-sm">
              <Typography :variant="VariantEnum.secondary" size="12">Запомнить меня</Typography>
            </div>
          </div>
          <Typography :variant="VariantEnum.primary" size="12"> Забыли пароль? </Typography>
        </div>
        <Button variant="primary" type="submit" class="w-full font-medium tracking-wide">
          Войти
        </Button>
        <Typography class="flex gap-2" size="12">
          Ещё нет аккаунта?
          <Typography :variant="VariantEnum.primary">Зарегистрироваться</Typography>
        </Typography>
      </form>
    </div>
  </div>

  <Contact />
</template>

<style scoped></style>
